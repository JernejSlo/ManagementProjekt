
import {setUser} from "../Slices/navSlice";
import {supabase} from "../supbase";

export const handleLogin = async (email, password, dispatch) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (!error) {
    dispatch(setUser({...data.user,loggedIn: true}))
    console.log(`User successfully logged in with this data:`, data.user);
  } else {
    console.error(error);
  }
};

export const handleSignup = async (email, password, name, dispatch) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        display_name: name,
      },
    },
  });

  if (!error) {
    dispatch(setUser({...data.user,loggedIn: true}))
    console.log(`User successfully logged in with this data:`, data.user);
  } else {
    console.error(error);
  }
};

export const handleLogout = async (dispatch) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  } else {
    dispatch(setUser({
      name: "",
      location: "",
      img: require('../assets/UserIcons/KatjaIcon.png'),
      rank: -1,
      startWeight: 0,
      weight: 0,
      goal: 0,
      loggedIn: false
    }))
    console.log("User successfully logged out");
  }
};

export const handleForgotPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error(error);
  } else {
    useUserStore.setState({ user: false, userData: null });
    console.log("User successfully logged out");
  }
};
