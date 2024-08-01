const API_URL = import.meta.env.VITE_API_URL;


export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const res = await fetch(`${API_URL}/login`, requestOptions);
  const data = await res.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}


export async function register(authDetail){
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    };

    const res = await fetch(`${API_URL}/register`, requestOptions);
    const data = await res.json();

    if (data.accessToken) {
        sessionStorage.setItem("token",JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
    }
    return data;
}



export function logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('cbid');
}