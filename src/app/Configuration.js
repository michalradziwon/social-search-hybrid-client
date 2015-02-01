var localConfig = {
  backendClient: function () {
    return {
      host: "http://localhost:8080"
    }
  }
};

var herokuConfig1_Skok = {
  backendClient: function () {
    return {
      host: "http://sheltered-lake-4481.herokuapp.com"
    }
  }
};

var herokuConfig2_Piec = {
  backendClient: function () {
    return {
      host: "http://arcane-harbor-5434.herokuapp.com"
    }
  }
};




module.exports = herokuConfig1_Skok;