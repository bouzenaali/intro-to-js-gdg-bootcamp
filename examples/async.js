// let's define three functions
function fetchDataFromAPI(callback) {
    setTimeout(() => {
      const data = { messag: "Data fetched successfully" };
      callback(data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      const processedData = `${data.message} - Processed`;
      callback(processedData);
    }, 1000);
  }
  
  function displayData(data) {
    console.log(data);
  }


// and then call them in a sequence
  fetchDataFromAPI(function (data) {
    processData(data, function (processedData) {
      displayData(processedData);
    });
  });


// using promises
  function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data 
        data = { message: "Data fetched successfully" };
        if (data) {
            resolve(data);
        } else {
            reject(new Error('Data not found'));
        }
        
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let processedData 
        processedData = `${data.message} - Processed`;
        if (processedData) {
            resolve(processedData);
        } else {
            reject(new Error('Error processing data'));
        }
        
      }, 1000);
    });
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  fetchDataFromAPI()
    .then(processData)
    .then(displayData)
    .catch(error => console.error(error.message));

// using async/await
async function fetchDataAndProcessData() {
    try {
      const data = await fetchDataFromAPI();
      const processedData = await processData(data);
      displayData(processedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchDataAndProcessData();
  