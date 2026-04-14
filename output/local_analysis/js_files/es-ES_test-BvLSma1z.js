const e = "ES",
  a = "es",
  t = "es-ES",
  r = "lidl.es",
  l = "EUR",
  n = "€",
  d = "00",
  c = ".",
  o = "DD.MM.YYYY",
  i = "HH:mm",
  s = 100,
  u = 3e3,
  m = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:35",
    lastName: "required|min-length:1|max-length:35",
    additionalInformation: "min-length:0|max-length:35",
    postalCode: "required",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:5",
    countryCode: "required",
    company: "required|min-length:2|max-length:35",
    phoneNumber: "required|max-length:12",
    birthdate: "required|birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "exact-length:9"
  },
  b = {
    postalCode: "required|exact-length-without-whitespace:5",
    location: "required|min-length:0|max-length:35",
    postNumber: "numeric",
    packstationNumber: ""
  },
  g = {
    postNumber: ""
  },
  x = {
    vatNumber: "*#######*",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: ""
  },
  k = "",
  p = !0,
  y = "20",
  N = {
    ratings: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !0
    },
    newsletter: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !0
    },
    termsAndConditions: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !1
    },
    companyTerms: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !1
    }
  },
  C = "",
  A = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  E = "",
  V = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  R = ["PARCEL_LOCKER", "PARCEL_SHOP", "HOME_DELIVERY"],
  q = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  I = "test",
  S = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  v = {
    country: "ES",
    language: "es",
    locale: t,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: o,
    timeFormat: i,
    hardAddressValidationThreshold: 100,
    salutationThreshold: 3e3,
    addressValidationRules: m,
    parcelDeliveryRules: b,
    parcelDeliveryMasks: g,
    addressMasks: x,
    phoneNumberPrefix: "",
    logEnabled: p,
    logMaxStack: "20",
    optInBox: N,
    newsletterIframeUrl: "",
    userWerk: A,
    simpleSuranceShopId: "",
    recaptchaSiteKey: V,
    deliveryOptionsOrder: R,
    googleMapsApiKey: q,
    env: I,
    apiKeyApe: S
  };
export {
  x as addressMasks, m as addressValidationRules, S as apiKeyApe, e as country, l as currency, c as currencySeparator, n as currencySymbol, o as dateFormat, v as
  default, R as deliveryOptionsOrder, d as doubleZeroDecimals, I as env, q as googleMapsApiKey, s as hardAddressValidationThreshold, a as language, t as locale, p as logEnabled, y as logMaxStack, C as newsletterIframeUrl, N as optInBox, g as parcelDeliveryMasks, b as parcelDeliveryRules, k as phoneNumberPrefix, V as recaptchaSiteKey, u as salutationThreshold, E as simpleSuranceShopId, r as storeName, i as timeFormat, A as userWerk
};