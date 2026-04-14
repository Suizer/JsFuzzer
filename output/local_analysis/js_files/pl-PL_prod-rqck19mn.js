const e = "PL",
  t = "pl",
  a = "pl-PL",
  l = "lidl.pl",
  r = "PLN",
  n = "zł",
  o = "00",
  d = ",",
  i = "DD.MM.YYYY",
  s = "HH:mm",
  c = 100,
  m = 9999999,
  u = {
    salutation: "required",
    firstName: "required|min-length:2|max-length:35",
    lastName: "required|min-length:2|max-length:35",
    additionalInformation: "vat-forbidden|min-length:0|max-length:35",
    postalCode: "required|min-length:0",
    city: "required|min-length:0|max-length:35",
    street: "required|min-length:0|max-length:35",
    streetNumber: "required|min-length:0|max-length:10",
    countryCode: "required",
    company: "required|min-length:0|max-length:35",
    phoneNumber: "exact-length-without-whitespace:9",
    birthdate: "birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "required|min-length:0|max-length:12"
  },
  p = {
    postalCode: "required|min-length:0|max-length-without-whitespace:6",
    location: "min-length:0|max-length:35",
    postNumber: "required|min-length:0|max-length:20|numeric",
    packstationNumber: ""
  },
  g = {
    postNumber: "####################"
  },
  k = {
    vatNumber: "PL##########",
    phoneNumber: "N########",
    birthdate: "00.00.0000",
    postalCode: "##-###"
  },
  b = "+48",
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
  w = "",
  V = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  q = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.pl/informacje-dla-klienta/newsletter",
    sources: {
      phone: "/images/localized/PL/pl/teaser/newsletter-sm.jpg",
      tablet: "/images/localized/PL/pl/teaser/newsletter-md.jpg",
      desktop: "/images/localized/PL/pl/teaser/newsletter-md.jpg"
    }
  }],
  P = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  A = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  C = "prod",
  S = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  v = {
    country: "PL",
    language: "pl",
    locale: a,
    storeName: l,
    currency: "PLN",
    currencySymbol: "zł",
    doubleZeroDecimals: "00",
    currencySeparator: ",",
    dateFormat: i,
    timeFormat: s,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: p,
    parcelDeliveryMasks: g,
    addressMasks: k,
    phoneNumberPrefix: "+48",
    logEnabled: x,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: V,
    teasers: q,
    recaptchaSiteKey: P,
    googleMapsApiKey: A,
    env: C,
    apiKeyApe: S
  };
export {
  k as addressMasks, u as addressValidationRules, S as apiKeyApe, e as country, r as currency, d as currencySeparator, n as currencySymbol, i as dateFormat, v as
  default, o as doubleZeroDecimals, C as env, A as googleMapsApiKey, c as hardAddressValidationThreshold, t as language, a as locale, x as logEnabled, N as logMaxStack, w as newsletterIframeUrl, y as optInBox, g as parcelDeliveryMasks, p as parcelDeliveryRules, b as phoneNumberPrefix, P as recaptchaSiteKey, m as salutationThreshold, l as storeName, q as teasers, s as timeFormat, V as userWerk
};