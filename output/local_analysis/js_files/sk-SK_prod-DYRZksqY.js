const e = "SK",
  t = "sk",
  a = "sk-SK",
  r = "lidl.sk",
  l = "EUR",
  n = "€",
  s = "00",
  o = ".",
  d = "DD.MM.YYYY",
  c = "HH:mm",
  i = 100,
  m = 9999999,
  u = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:20",
    lastName: "required|min-length:2|max-length:35",
    additionalInformation: "min-length:0|max-length:35",
    postalCode: "required|min-length:0",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:10",
    countryCode: "required",
    company: "min-length:0|max-length:40",
    phoneNumber: "exact-length-without-whitespace:9",
    birthdate: "birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "min-length:0|max-length:12|required"
  },
  k = {
    location: "required|min-length:0|max-length:35",
    postNumber: "numeric",
    packstationNumber: ""
  },
  g = {
    postNumber: ""
  },
  b = {
    vatNumber: "AA#########",
    phoneNumber: "!9########",
    birthdate: "00.00.0000",
    postalCode: "### ##"
  },
  p = "+421",
  x = !1,
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
  S = "",
  V = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  w = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl-shop.sk/c/newsletter/s10000210",
    sources: {
      phone: "/images/localized/SK/sk/teaser/newsletter-sm.jpg",
      tablet: "/images/localized/SK/sk/teaser/newsletter-md.jpg",
      desktop: "/images/localized/SK/sk/teaser/newsletter-md.jpg"
    }
  }],
  A = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  q = "",
  C = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  I = "prod",
  v = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  K = {
    country: "SK",
    language: "sk",
    locale: a,
    storeName: r,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: d,
    timeFormat: c,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: k,
    parcelDeliveryMasks: g,
    addressMasks: b,
    phoneNumberPrefix: p,
    logEnabled: x,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: V,
    teasers: w,
    recaptchaSiteKey: A,
    rmsThreatMetrixOrgId: "",
    googleMapsApiKey: C,
    env: I,
    apiKeyApe: v
  };
export {
  b as addressMasks, u as addressValidationRules, v as apiKeyApe, e as country, l as currency, o as currencySeparator, n as currencySymbol, d as dateFormat, K as
  default, s as doubleZeroDecimals, I as env, C as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, a as locale, x as logEnabled, N as logMaxStack, S as newsletterIframeUrl, y as optInBox, g as parcelDeliveryMasks, k as parcelDeliveryRules, p as phoneNumberPrefix, A as recaptchaSiteKey, q as rmsThreatMetrixOrgId, m as salutationThreshold, r as storeName, w as teasers, c as timeFormat, V as userWerk
};