import { ref } from 'vue';
import axios from 'axios';

export default function loginLogic() {
  const form = ref({
    email: '',
    password: ''
  });

  const errors = ref([]);

  const checkForm = () => {
    errors.value.length = 0;
    if (!form.value.email) {
      errors.value.push({
        key: 'email',
        value: '請輸入Email'
      });
    }
    if (!form.value.password) {
      errors.value.push({
        key: 'password',
        value: '請輸入密碼'
      });
    }

    return errors.value.length === 0;
  };

  const getError = (key) => {
    return errors.value.find(item => item.key === key);
  };

  // const login = () => {
  //   if (!checkForm()) return false;
  //   axios
  //     .post('/post/login', form.value)
  //     .then((res) => {
  //       if (res.data.error_code !== 'ok') {
  //         alert(res.data.error_code);
  //         return false;
  //       }
  //       location.href = res.data.data.return_url;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const login = () => {
    if (!checkForm()) return false;
    alert('登入成功')
  };

  return {
    form,
    errors,
    checkForm,
    getError,
    login
  };
}
