import { makeRequests } from './makeRequests.js';

window.inProgressStatus = 'in progress';
window.resolvedStatus = 'resolved';
window.rejectedStatus = 'rejected';
window.duplicateStatus = 'duplicate';
window.statusClass = '.status';
window.duplicateClass = '.duplicate';
window.answerClass = '.answer';


class StatusController{
  constructor(){
    this.statusMap = new Map();
    this.statusMap.set(window.inProgressStatus, new Map()); // [url -> promise]
    this.statusMap.set(window.resolvedStatus, new Map()); // [url -> answer]
    this.statusMap.set(window.rejectedStatus, new Map()); // [url -> answer]
    this.statusMap.set(window.duplicateStatus, new Map()); // [url -> indexes]
  }


  FillDuplicates(url, curStatus, ans){
    for(let idx of [...this.statusMap.get(window.duplicateStatus).get(url)]){
      document.querySelectorAll(window.answerClass)[idx].innerText = ans;
      document.querySelectorAll(window.statusClass)[idx].innerText = curStatus;
      document.querySelectorAll(window.duplicateClass)[idx].innerText = window.duplicateStatus;
    }
  }

  SetNewStatus(curStatusName, url, index, text){
    let curMap = this.statusMap.get(curStatusName);
    let curAnswer;
    if(!curMap.has(url)){
      curMap.set(url, text);
      this.statusMap.get(window.inProgressStatus).delete(url);
      curAnswer = text;
      if(this.statusMap.get(window.duplicateStatus).has(url)){
        this.FillDuplicates(url, curStatusName, curAnswer.slice(0, 80));
      }
    }
    else{
      document.querySelectorAll(window.duplicateClass)[index].innerText = window.duplicateStatus;
      curAnswer = curMap.get(url);
    }

    document.querySelectorAll(window.answerClass)[index].innerText = curAnswer.slice(0, 80);
    document.querySelectorAll(window.statusClass)[index].innerText = curStatusName;
  }

  IsDuplicate(url, index){
    document.querySelectorAll(window.statusClass)[index].innerText = window.inProgressStatus;
    if(this.statusMap.get(window.inProgressStatus).has(url)){
      if(!this.statusMap.get(window.duplicateStatus).has(url)){
        this.statusMap.get(window.duplicateStatus).set(url, new Set());
      }
      this.statusMap.get(window.duplicateStatus).get(url).add(index);
    }
    else if(this.statusMap.get(window.resolvedStatus).has(url)){
      this.SetNewStatus(window.resolvedStatus, url, index);
    }
    else if(this.statusMap.get(window.rejectedStatus).has(url)){
      this.SetNewStatus(window.rejectedStatus, url, index);
    }
    else{
      return false;
    }
    return true;
  }


  AddToProgressQueue(url, promise){
    this.statusMap.get(window.inProgressStatus).set(url, promise);
  }

  ProgressQueueSize(){
    return this.statusMap.get(window.inProgressStatus).size;
  }

  PromisesArray(){
    return [...this.statusMap.get(window.inProgressStatus).values()];
  }
}

function AddStatListItem(url){
  let urlElem = document.createElement('td');
  urlElem.className = 'url';
  urlElem.innerText = url;
  let statusElem =  document.createElement('td');
  statusElem.className = 'status';
  statusElem.innerText = 'wait';
  let duplicateElem =  document.createElement('td');
  duplicateElem.className = 'duplicate';
  let answerText =  document.createElement('td');
  answerText.className = 'answer';

  return [urlElem, statusElem, duplicateElem, answerText];
}

function AddResultItem(str, ans){
  let curEl = document.createElement('details');
  let curUrl = document.createElement('summary');
  curUrl.innerText = str;
  let curAns = document.createElement('p');
  curAns.innerText = ans;
  curEl.append(curUrl, curAns);
  return curEl;
}

window.makeRequests = async () => {
  document.getElementById("tableStates").hidden = false;
  let statList = document.getElementById("statusesList");
  let inputText = document.getElementById('inputUrls').value.replace(/[\s'"]/g, '').split(',');
  let maxReq = Number(document.getElementById('inputMax').value);

  for(let el of inputText){
    let container =  document.createElement('tr');
    container.append(...AddStatListItem(el));
    statList.append(container);
  }

  let status = new StatusController();
  let resEl = document.getElementById('results');
  let result = await makeRequests(inputText, maxReq, status);

  for(let i = 0; i < inputText.length; i++){
    resEl.append(AddResultItem(inputText[i], result[i]));
  }
}
