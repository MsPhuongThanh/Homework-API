function apiGetUsers(searchTerm) {
    return axios({
      url: "https://62f50950ac59075124c9d62a.mockapi.io/UserAPI",
      method: "GET",
      params: {
    loaiND: searchTerm,
       
      },
    });
  }
  
  function apiAddUser(user) {
    return axios({
      url: "https://62f50950ac59075124c9d62a.mockapi.io/UserAPI",
      method: "POST",
      data: user,
    });
  }
  
  function apiDeleteUser(userId) {
    return axios({
      url: `https://62f50950ac59075124c9d62a.mockapi.io/UserAPI/${userId}`,
      method: "DELETE",
    });
  }
  
  function apiGetUserById(userId) {
    return axios({
      url: `https://62f50950ac59075124c9d62a.mockapi.io/UserAPI/${userId}`,
      method: "GET",
    });
  }
  
  function apiUpdateUser(userId, user) {
    return axios({
      url: `https://62f50950ac59075124c9d62a.mockapi.io/UserAPI/${userId}`,
      method: "PUT",
      data: user,
    });
  }
  