/**
 * Задача повышенной сложности. На неё нет тестов, и ее выполнение
 * должно быть визуализировано.
 *
 * Напишите функцию makeRequests(urls, maxRequests), получающую
 * на вход массив ссылок urls и число maxRequests - максимальное
 * количество одновременных запросов. Условия:
 *
 * 1. Одновременно должно выполняться не более указанного
 *    числа запросов.
 * 2. Должен возвращаться promise, резолвящийся в массив результатов
 *    в той же последовательности, что и адреса запросов.
 * 3. Дублирующиеся урлы должны игнорироваться (при этом
 *    результат всё равно должен присутствовать в результате
 *    на нужной позиции).
 * 4. Массив результатов должен возвращаться вне зависимости
 *    от успешности выполнения запросов.
 * 5. В массиве результатов вместо "упавших" запросов должна быть строка "Error"
 *
 * Требования к визуализации:
 *
 * 1. Должен быть создан index.html
 * 2. В интерфейсе должна быть возможность задать любое количество url.
 *    (Можно сделать это добавлением/удалением полей, перечислить через запятую в одном текстовом поле
 *    или любой другой вариант, на который хватит фантазии)
 * 3. В интерфейсе должна быть возможность задать число -- ограничение на количество запросов
 * 4. В интерфейсе должна быть кнопка, по нажатию на которую должно начинаться выполнение запросов
 * 5. После запуска должен отображаться список url
 * 6. У каждого url должен отображаться актуальный статус
 *    (wait, in progress, resolved, rejected), доп информация (duplicate) и результат. Хорошо,
 *    если статус будет отображаться цветом
 * 7. После выполнения всех запросов на страницу нужно вывести результат
 *
 * @param  {string[]} urls      массив с адресами
 * @param  {number} maxRequests максимальное количество одновременных запросов
 * @return {Promise}
 */

export  const  makeRequests = (urls, maxRequests=1, statuses) => {
  return new Promise(async (resolve, _) => {

    function myFetch(url, index){
      if(myFetch._cache === undefined){
        myFetch._cache = new Map();
      }

      if(!myFetch._cache.has(url)){
        let curPromise = fetch(url)
        .then(
          res => res.ok ? res : Promise.reject(res),
          er => Promise.reject(er)
        )
        .then(
          res => res.text()
        )
        .then(text => {
          statuses.SetNewStatus(window.resolvedStatus, url, index, text);
        })
        .catch(
          () => {
            statuses.SetNewStatus(window.rejectedStatus, url, index, "Error");
        });

        myFetch._cache.set(url, curPromise);
      }

      return myFetch._cache.get(url);
    }

    for(let i = 0; (i < urls.length || statuses.ProgressQueueSize() !== 0); i++){
      if(i < urls.length){
        if(!statuses.IsDuplicate(urls[i], i)){
          statuses.AddToProgressQueue(urls[i], myFetch(urls[i], i));
        }
      }
      if(statuses.ProgressQueueSize() === maxRequests || i >=  urls.length){
        try{
          await Promise.any(statuses.PromisesArray());
        }
        catch (err){}
      }
    }

    let result = urls.map(element => {
      if(statuses.statusMap.get(window.resolvedStatus).has(element)){
        return statuses.statusMap.get(window.resolvedStatus).get(element);
      }
      else{
        return statuses.statusMap.get(window.rejectedStatus).get(element);
      }
    });

    resolve(result);
  });
};


