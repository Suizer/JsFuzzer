const e = "ES",
  a = "es",
  t = "es-ES",
  r = "lidl.es",
  l = "EUR",
  n = "€",
  c = "00",
  d = ".",
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
  p = {
    vatNumber: "*#######*",
    phoneNumber: "",
    birthdate: "00.00.0000",
    postalCode: ""
  },
  x = "",
  k = !0,
  N = "20",
  y = {
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
  A = "",
  E = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  C = "5422317048a54dc989570a562c8336dc",
  v = "6LcB3NQqAAAAALWs2dAvAvYWtjWHEM78GutFJpDO",
  q = ["PARCEL_LOCKER", "PARCEL_SHOP", "HOME_DELIVERY"],
  V = "AIzaSyAUg3E1CMTvWKWvqmXcOPhpYXl-1hInluQ",
  R = "dev",
  I = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  S = {
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
    addressMasks: p,
    phoneNumberPrefix: "",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: E,
    simpleSuranceShopId: C,
    recaptchaSiteKey: v,
    deliveryOptionsOrder: q,
    googleMapsApiKey: V,
    env: "dev",
    apiKeyApe: I
  };
export {
  p as addressMasks, m as addressValidationRules, I as apiKeyApe, e as country, l as currency, d as currencySeparator, n as currencySymbol, o as dateFormat, S as
  default, q as deliveryOptionsOrder, c as doubleZeroDecimals, R as env, V as googleMapsApiKey, s as hardAddressValidationThreshold, a as language, t as locale, k as logEnabled, N as logMaxStack, A as newsletterIframeUrl, y as optInBox, g as parcelDeliveryMasks, b as parcelDeliveryRules, x as phoneNumberPrefix, v as recaptchaSiteKey, u as salutationThreshold, C as simpleSuranceShopId, r as storeName, i as timeFormat, E as userWerk
};