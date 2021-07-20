import { createStore, Commit } from 'vuex'

export interface UserProps {
  isLogin: boolean;
}
export interface GlobalDataProps {
  token: string;
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    token: localStorage.getItem('token') || '',
    user: { isLogin: true }
  }
})

export default store
