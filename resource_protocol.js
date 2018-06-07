class Resource{
  constructor() {
    this._id = ''
  }

  static getUUID(oriThirdPartyId) {

  }

  static getIdByUUID() {

  }

  static getUUIDById () {

  }

}

class DoubanResource extends Resource{
  constructor() {
    super()
  }

  static get['UUID_PREF'] {
    return 'https://douban.com/note/'
  }

  static getUUID (oriThirdPartyId) {
    retuen `${DoubanResource.UUID_PREF}${oriThirdPartyId}`
  }

  static getOriginalThirdPartyId(UUID) {
    return UUID.split(DoubanResource.UUID_PREF)[1]
  }

  static getIdByUUID() {

  }

  static getUUIDById() {
    
  }
}