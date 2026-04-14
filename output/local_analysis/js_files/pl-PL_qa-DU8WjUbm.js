const e = "PL",
  t = "pl",
  a = "pl-PL",
  l = "lidl.pl",
  r = "PLN",
  n = "zł",
  d = "00",
  o = ",",
  c = "DD.MM.YYYY",
  i = "HH:mm",
  s = 100,
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
  g = {
    postalCode: "required|min-length:0|max-length-without-whitespace:6",
    location: "min-length:0|max-length:35",
    postNumber: "required|min-length:0|max-length:20|numeric",
    packstationNumber: ""
  },
  p = {
    postNumber: "####################"
  },
  b = {
    vatNumber: "PL##########",
    phoneNumber: "N########",
    birthdate: "00.00.0000",
    postalCode: "##-###"
  },
  x = "+48",
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
  w = "",
  P = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  A = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.pl/informacje-dla-klienta/newsletter",
    sources: {
      phone: "/images/localized/PL/pl/teaser/newsletter-sm.jpg",
      tablet: "/images/localized/PL/pl/teaser/newsletter-md.jpg",
      desktop: "/images/localized/PL/pl/teaser/newsletter-md.jpg"
    }
  }],
  C = "6LdgJ_kUAAAAAPZMDBTZbdy74RLd4rfz0jrVCa2n",
  V = "AIzaSyAE9xPtOM9HeK2LMvcyE5sTfUPpvrN4CkA",
  q = "qa",
  v = "AIzaSyANM8uAHHaYDwIcdZYswljRND4ziYTmOR8",
  L = {
    country: "PL",
    language: "pl",
    locale: a,
    storeName: l,
    currency: "PLN",
    currencySymbol: "zł",
    doubleZeroDecimals: "00",
    currencySeparator: ",",
    dateFormat: c,
    timeFormat: i,
    hardAddressValidationThreshold: 100,
    salutationThreshold: m,
    addressValidationRules: u,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: p,
    addressMasks: b,
    phoneNumberPrefix: "+48",
    logEnabled: k,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: P,
    teasers: A,
    recaptchaSiteKey: C,
    googleMapsApiKey: V,
    env: "qa",
    apiKeyApe: v
  };
export {
  b as addressMasks, u as addressValidationRules, v as apiKeyApe, e as country, r as currency, o as currencySeparator, n as currencySymbol, c as dateFormat, L as
  default, d as doubleZeroDecimals, q as env, V as googleMapsApiKey, s as hardAddressValidationThreshold, t as language, a as locale, k as logEnabled, N as logMaxStack, w as newsletterIframeUrl, y as optInBox, p as parcelDeliveryMasks, g as parcelDeliveryRules, x as phoneNumberPrefix, C as recaptchaSiteKey, m as salutationThreshold, l as storeName, A as teasers, i as timeFormat, P as userWerk
};