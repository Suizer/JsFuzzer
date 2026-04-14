const e = "FR",
  t = "fr",
  r = "fr-FR",
  a = "lidl.fr",
  l = "EUR",
  n = "€",
  o = "00",
  d = ".",
  s = "DD.MM.YYYY",
  c = "HH:mm",
  i = 100,
  u = 9999999,
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
    company: "min-length:2|max-length:35",
    phoneNumber: "required|exact-length-without-whitespace:10",
    birthdate: "required|birthdate",
    startBirthdate: "31.12.1899",
    vatNumber: "required|exact-length:13"
  },
  g = {
    postalCode: "required|exact-length-without-whitespace:5",
    location: "min-length:0|max-length:35|required",
    postNumber: "numeric",
    packstationNumber: ""
  },
  p = {
    postNumber: ""
  },
  k = {
    vatNumber: "FR###########",
    phoneNumber: "##########",
    birthdate: "00.00.0000",
    postalCode: "#####"
  },
  b = "",
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
      shouldRender: !0
    },
    companyTerms: {
      analyticsEventName: "",
      checkboxCheckedValue: !0,
      checkboxNotCheckedValue: !1,
      checkboxPreselectedValue: !1,
      shouldRender: !1
    }
  },
  R = "",
  V = {
    channelIdWeb: "",
    channelIdAndroid: "",
    channelIdIOS: ""
  },
  w = [{
    id: "newsletter",
    altText: "newsletter",
    href: "https://www.lidl.fr/c/inscription-a-la-newsletter/s10017563",
    sources: {
      phone: "/images/localized/FR/fr/teaser/newsletter-sm.png",
      tablet: "/images/localized/FR/fr/teaser/newsletter-md.png",
      desktop: "/images/localized/FR/fr/teaser/newsletter-md.png"
    }
  }],
  C = "6LeNotkUAAAAAF2y0e-AImrAofdeV41nukNu0JUl",
  q = ["PARCEL_LOCKER", "PARCEL_SHOP", "HOME_DELIVERY"],
  A = 0,
  f = "AIzaSyBSwN46qFIsqSo-mXSD7i_SJwDHVkEOv5M",
  E = "prod",
  S = "AIzaSyD_C7MPzl8YxqkeBs0UwBF1j4VZeS81584",
  F = {
    country: "FR",
    language: "fr",
    locale: r,
    storeName: a,
    currency: "EUR",
    currencySymbol: "€",
    doubleZeroDecimals: "00",
    currencySeparator: ".",
    dateFormat: s,
    timeFormat: c,
    hardAddressValidationThreshold: 100,
    salutationThreshold: u,
    addressValidationRules: m,
    parcelDeliveryRules: g,
    parcelDeliveryMasks: p,
    addressMasks: k,
    phoneNumberPrefix: "",
    logEnabled: x,
    logMaxStack: "20",
    optInBox: y,
    newsletterIframeUrl: "",
    userWerk: V,
    teasers: w,
    recaptchaSiteKey: C,
    deliveryOptionsOrder: q,
    cashbackCartValueThreshold: 0,
    googleMapsApiKey: f,
    env: E,
    apiKeyApe: S
  };
export {
  k as addressMasks, m as addressValidationRules, S as apiKeyApe, A as cashbackCartValueThreshold, e as country, l as currency, d as currencySeparator, n as currencySymbol, s as dateFormat, F as
  default, q as deliveryOptionsOrder, o as doubleZeroDecimals, E as env, f as googleMapsApiKey, i as hardAddressValidationThreshold, t as language, r as locale, x as logEnabled, N as logMaxStack, R as newsletterIframeUrl, y as optInBox, p as parcelDeliveryMasks, g as parcelDeliveryRules, b as phoneNumberPrefix, C as recaptchaSiteKey, u as salutationThreshold, a as storeName, w as teasers, c as timeFormat, V as userWerk
};