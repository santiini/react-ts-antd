import moment from 'moment'

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
      return response
  } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
  }
}

export function parseJSON(response) {
  if(response.status == 204) return new Promise((resolve, reject) => {
    return resolve({id: 1})
  })
  return response.json()
}

export function createReducer(intialState, handlers) {
  return (state = intialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return handler(state, action);
  };
}

export function getLocalToken() {
  const access_token = localStorage.getItem('access_token')
  const refresh_token = localStorage.getItem('refresh_token')
  const expires_at = localStorage.getItem('expired_at')
  if (moment().unix() < expires_at) {
    return access_token
  } else {
    return null
  }
}

export function setLocalToken(token) {
  const { access_token, refresh_token, expires_in } = token
  const expires_at = expires_in * 1000 + moment().unix()
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
  localStorage.setItem('expired_at', expires_at)
  return {
    access_token,
    refresh_token,
    expires_at
  }
}

export function removeLocalToken() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('expires_at')
}

export function dateFormat(date, type) {
  if(type == 'day') {
    return moment(date).format('YY/MM/DD')
  } else if(type == 'minute') {
    return moment(date).format('YY/MM/DD HH:mm')
  } else if(type == 'second') {
    return moment(date).format('YY/MM/DD HH:mm:ss')
  }
}

export function checkResponseData(response) {
  if(response.code || (response.message && !response.id)) {
    let msg = null
    if(typeof(response.message) === 'string') {
      msg = response.message
    }
    if(_.isArray(response.message)) {
      const {message, path} = response.message[0]
      msg = message
      if(path)
        msg = `${path}: ${message}`;
    }
    var error = new Error(msg)
    throw error
  }
  return response;
}

export function t(msg) {
  const errorMap = {
    "Miss required parameter text in data , see doc for more info": "请输入内容",
    "The access token provided is invalid.": "登录超时，请重新登录",
    "content is null!": "请输入内容",
    "miss required parameter (status), see doc for more info.": "请输入内容",
    "email: Resource exists.": "邮箱已经注册",
    " Text too long, please input text less than 140 characters!": "发送的内容不能超过140个字符",
    "The access token provided has expired.": "登陆超时，请重新登陆",
    "email: User has existed.": "用户已存在",
    'invalid_access_token': "微博账号授权失效,请重新授权",
    "Resource not found.": "没有使用权限",
    "Missing required params: message": "请输入内容",
    "message: Message length [1 - 200]": "内容长度不能超过200",
    'userId: Resource exists.': '邮箱已存在',
    'userId: Validation len failed.': '文集名称过长',
    "The team sub resources up-to limit: topics" : "主题不能超出上限",
    "sources: sources cannot be null": "来源不能为空",
    "name: Validation len failed" : "主题名称为1-20个字符",
    "keywords: 关键词最少 1 个":"关键词最少一个",
    "keywords: 关键词最多 20 个" : "关键词最多5个",
    "keywords: 包含词最多 20 个" : "包含词最多 20 个",
    "keywords: 排除词最多 20 个" : "排除词最多 20 个",
    "The team sub resources up-to limit: employees" : "添加成员达到上限",
    "the campaign's enddate must be after the startdate" : "项目的结束时间不能早于开始时间",
    "url cannot be null" : "链接不能为空",
    "campaign is not exists": "项目不存在",
    "there are more than 2 same urls in these contents": "提交内容中有重复的链接",
    "error occurred while fetch wechat": "超时,过会儿重试",
    "name: Resource exists.": "不能重名",
    "Resource exists.": "不能重名",
  }
  if(msg.includes("error occurred while fetch usershow")) return "获取kol信息出错"
  if(msg.includes("some accountId not correct in")) return "账号ID不正确"
  return  errorMap[msg] || msg
}

export function returnNotifyMsgByResponse(message) {
  if(_.has(message, 'response.status') && message.response.status == 504) {
    return {
      code: "systemError",
      msg: '获取数据超时'
    }
  }

  let messages = message
  if(_.has(message, 'response.data.message')) {
    if(Array.isArray(message.response.data.message)) {
      messages = message.response.data.message[0].message
    } else {
      messages = message.response.data.message
    }
  }

  if(messages.indexOf('Not authorized error.') >= 0) {
    //removeLocalToken()
    if(dispatch) dispatch(pushState(null, '/auth/signin'))
    return {
      code: "NotRegister",
      component: 'notification',
      msg: '该账号未注册过推策，请先注册，或切换其它账号'
    }
  }
  else if(messages.indexOf('The access token provided is invalid.') >= 0 ||
          messages.indexOf('The access token provided has expired.') >= 0) {
    removeLocalToken()
    if(dispatch) dispatch(pushState(null, '/auth/signin'))
    return {
      code: "SessionExpired",
      msg: t(message.response.data.message)
    }
  }
  else if(messages.indexOf("must be unique") >= 0) {
    return {
      msg: "不能重名"
    }
  }
  return {
    code: "System",
    msg: t(messages)
  }
}

export function dateRange(start, end) {
    const  format= "YYYY-MM-DD"
    var range = [];
    var startDate = moment(start);
    var endDate = moment(end);
    if (startDate > endDate) {
      throw Error("start-date must be less end-date");
    }
    while (startDate <= endDate) {
      range.push(startDate.format(format));
      startDate = startDate.add(1, 'days');
    }
    return range
  }

// set page size
export var pageSize = 20

//change array to sheet
export function arrayToSheet(data) {
  var ws = {};
  var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
  for(var R = 0; R != data.length; ++R) {
    for(var C = 0; C != data[R].length; ++C) {
      if(range.s.r > R) range.s.r = R;
      if(range.s.c > C) range.s.c = C;
      if(range.e.r < R) range.e.r = R;
      if(range.e.c < C) range.e.c = C;
      var cell = {v: data[R][C] };
      if(cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({c:C,r:R});

      if(typeof cell.v === 'number') cell.t = 'n';
      else if(typeof cell.v === 'boolean') cell.t = 'b';
      else if(cell.v instanceof Date) {
        cell.t = 'n'; cell.z = XLSX.SSF._table[14];
        cell.v = datenum(cell.v);
      }
      else cell.t = 's';

      ws[cell_ref] = cell;
    }
  }
  if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

export function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

//download
export function download(data, fileHeader, fileName) {
    data.unshift(fileHeader)
    /* original data */
    let ws_name = "kolSheet";
    function Workbook() {
      if(!(this instanceof Workbook)) return new Workbook();
      this.SheetNames = [];
      this.Sheets = {};
    }
    let wb = new Workbook(), ws = arrayToSheet(data);
    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    /* write file */
    let wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
    let wbout = XLSX.write(wb,wopts);
    /* the saveAs call downloads a file on the local machine */
    saveAs(new Blob([s2ab(wbout)],{type:""}), fileName)
}
//multiSheets download
export function downloadSheet(data, fileName) {
    /* original data */
    function Workbook() {
      if(!(this instanceof Workbook)) return new Workbook();
      this.SheetNames = [];
      this.Sheets = {};
    }
    let wb = new Workbook();
    /* add worksheet to workbook */
    _.map(data, (v, k) => {
      wb.SheetNames.push(k)
      wb.Sheets[k] = arrayToSheet(v)
    })
    /* write file */
    let wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
    let wbout = XLSX.write(wb,wopts);
    /* the saveAs call downloads a file on the local machine */
    saveAs(new Blob([s2ab(wbout)],{type:""}), fileName)
}

const sexTranslate = {
    male: "男",
    female: "女",
    other: "未知",
    f: "女",
    m: "男"

}
const translation = {
  "flash":"阅读数",
  "acount":"点赞数",
  "阅读数": 'flash',
  "点赞数": 'acount',
  "时间最近": "created_at",
  "评论数": "comments_count",

   'wechat': 'article',
   'weibo': 'status',
   'xiaohongshu': 'content'


}
const platformTranslate = {
  "weibo": "微博",
  "wechat": "微信",
  "xiaohongshu": "小红书"
}

const taskSubTypes = {
  tadistribution: 'TA分布',
  commonattention: '共同关注'
}

export {sexTranslate, translation, platformTranslate, taskSubTypes}

//blacklist method
export function handleBlackWhiteList(accountId, e) {
    _jcq.push(['_track', "blacklist", {
      handle: e.target.innerHTML
    }]);
    const { teamAction, team, params } = this.props
    let blacklists= team.blacklist

    if(e.target.innerHTML == "标记风险") {
      blacklists.push(accountId)
    } else {
      _.remove(blacklists, v => v == accountId)
    }

    if(e.target.tagName == 'I') {
      if(e.target.style.color != 'orange') {
        blacklists.push(accountId)
      } else {
        _.remove(blacklists, v => v == accountId)
      }
    }
    teamAction.modify(params.teamId, {blacklist: blacklists})
}

