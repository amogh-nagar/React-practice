import React, {useState, useEffect, useCallback} from "react";

let logouttimer;

const Authcontext = React.createContext({
  token: "",
  isLoggedIn: false,
  timer: 0,
  login: (token) => {},
  logout: () => {},
});

const calculateremainingtime = (expirationTime) => {
  const currentTime = new Date().getTime(); //in milliseconds
  const adjustedexpirationtime = new Date(expirationTime).getTime();

  const reminingtime = adjustedexpirationtime - currentTime;
  return reminingtime;
};

const retrievestorestoken = () => {
  const storedtoken = localStorage.getItem("token");
  const storedexpiration = localStorage.getItem("expiresIn");

  const remainingtime = calculateremainingtime(storedexpiration);
  if (remainingtime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    return null;
  }
  return {token: storedtoken, duration: remainingtime};
};

export const Authcontextprovider = (props) => {
  // const tokendata = retrievestorestoken();
  const [timerc, settimerc] = useState(0);
  let initialtoken = localStorage.getItem("token");
  // if (tokendata) {
  //   initialtoken = tokendata.token;
  // }
  const [token, settoken] = useState(initialtoken ? initialtoken : null);

  let userisloggedin = !!token;

  console.log(userisloggedin);
  const loginhandler = (token, expirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", expirationTime);

    // const remainingtime = calculateremainingtime(expirationTime);
    // logouttimer = setTimeout(() => {
    //  console.log("hello");
    //   logouthandler();
    // },2000);
    settoken(token);
  };

  const logouthandler = useCallback(() => {
    settoken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    if (logouttimer) {
      clearTimeout(logouttimer);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (token) {
      // console.log(tokendata.duration);
      console.log("useeffect");
      let time = localStorage.getItem("expiresIn") - Date.now();
      console.log(time);
      settimerc(time);
      interval = setInterval(() => {
        settimerc((prevState) => prevState - 1);
      }, 1000);
      logouttimer = setTimeout(() => {
        logouthandler();
        console.log('Timeout');
      }, time);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [token, logouthandler]);

  const contextvalue = {
    token: token,
    timer: timerc,
    isLoggedIn: userisloggedin,
    login: loginhandler,
    logout: logouthandler,
  };

  return (
    <Authcontext.Provider value={contextvalue}>
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;
