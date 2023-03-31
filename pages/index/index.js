// index.js
import {
  wxValidate
} from '../../utils/index.js'

Component({
  data: {
    username: '',
    password: '',
    rules: [{
      username: {
        required: true,
      },
      password: {
        required: true,
      },
    }, {
      username: {
        required: '请输入您的账号',
      },
      password: {
        required: '请输入您的密码',
      },
    }]
  },

  lifetimes: {
    created() {
      this.WxValidate = new wxValidate(...this.data.rules)
    },
  },

  methods: {
    getValue(e) {
      const key = e.target.dataset.type

      this.setData({
        [key]: e.detail.value
      })
    },

    save(e) {

      if (!this.WxValidate.checkForm(e)) {
        const error = this.WxValidate.errorList[0]
        wx.showToast({
          title: `${error.msg} `,
          icon: 'none',
          duration: 2000
        })
        return false
      }

      const params = e.detail.value

      console.log(params)
    }
  }
})