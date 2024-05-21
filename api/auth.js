
import {setUser} from "../Slices/navSlice";
import {supabase} from "../supbase";

const fetchUsers = async (id) => {
  try {
    const { data, error } = await supabase
        .from('Users')
        .select('*')
        .eq('uid', id);

    if (error) {
      console.log(error)
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};


export const handleLogin = async (email, password, dispatch,navigation) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (!error) {
    console.log(`User successfully logged in with this data:`, data.user);
    console.log("\n",data.user.id)
    let users = await fetchUsers(data.user.id)
    let u = {...users[0]}
    dispatch(setUser({...u,loggedIn: true}))
    navigation.navigate('Dashboard');
  } else {
    console.error(error);
  }
};

function assignImage(gender) {
  let img = 'RedHairGirl.png'
  if (gender === "Male"){
    img = 'AlesGuy.png'
  }
  else if (gender === "Other"){
    img = 'AsianGuy.png'
  }
  return img
}

export const handleSignup = async (rData, dispatch, navigation) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: rData.email,
      password: rData.password,
      options: {
        data: {
          display_name: rData.name,
        },
      },
    });

    if (error) {
      throw error;
    }

    console.log(data);

    // Removing sensitive data before storing
    delete rData.password;
    delete rData.email;

    rData.start_weight = rData.weight;
    rData.uid = data.user.id;
    rData.img = assignImage(rData.gender);

    await addUser(rData, dispatch);
    navigation.navigate('Dashboard');
    console.log(`User successfully signed up with this data:`, data.user);
  } catch (error) {
    console.error('Error during signup:', error);
  }
};

const addUser = async (uData, dispatch) => {
  try {
    const { data, error } = await supabase
        .from('Users')
        .insert([uData]);

    if (error) {
      throw error;
    }

    dispatch(setUser({ ...uData, loggedIn: true }));
    console.log('User added to Users table:', data);
  } catch (error) {
    console.error('Error adding user to Users table:', error);
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
