export default function resourceSet(Vue) {

  Vue.http.interceptors.push((request, next) => {

    request.headers.token='set token msg';

    next((response) => {
      if (response.status == 500) {
        alert('操作失败：500')
      }
    });

  })

}
