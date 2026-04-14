const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["static/cs-CZ-DwmYa2xy.js", "static/setSuggestedData-DwPL-kko.js", "static/index-B90ESGR8.js", "static/index-Ho2ANwTJ.css", "static/_plugin-vue_export-helper-DlAUqK2U.js", "static/setSuggestedData-d8mfcCBk.css", "static/de-DE-DwmYa2xy.js", "static/es-ES-DwmYa2xy.js", "static/fr-BE-DwmYa2xy.js", "static/fr-FR-CzBeU_I8.js", "static/nl-BE-CuetaDXi.js", "static/nl-NL-CuetaDXi.js", "static/pl-PL-CuetaDXi.js", "static/sk-SK-CuetaDXi.js"]))) => i.map(i => d[i]);
import {
  d as M,
  j as K,
  k as Y,
  l as J,
  p as Q,
  x as N,
  q as s,
  e as F,
  J as P,
  c as S,
  F as O,
  b as c,
  g,
  s as T,
  u as t,
  S as x,
  w as E,
  o as r,
  _ as m,
  v as Z,
  K as z,
  C as W,
  G as X,
  a as V,
  t as R,
  H as ee,
  I as se,
  r as ae
} from "./index-B90ESGR8.js";
import {
  u as $,
  n as L,
  S as I,
  o as te,
  a as oe,
  F as le,
  A,
  f as w,
  _ as re,
  p as de,
  d as ie,
  r as ne,
  i as ue,
  j as me,
  l as D,
  m as ce,
  Q as pe
} from "./setSuggestedData-DwPL-kko.js";
import {
  _ as ve
} from "./_plugin-vue_export-helper-DlAUqK2U.js";
const fe = M({
    __name: "AFieldSetInvoiceAddress",
    props: K({
      countries: {
        type: Object,
        required: !0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    async setup(v) {
      let i, p;
      const f = v,
        d = $(),
        o = Y(v, "modelValue"),
        {
          t: e
        } = J(),
        {
          postalAddressFieldSalutation: h,
          invoiceAdditionalFieldsCompany: y,
          postalAddressFields: n,
          invoiceAdditionalFields: _
        } = ([i, p] = Q(() => re(Object.assign({
          "../schemas/cs-CZ.ts": () => m(() => import("./cs-CZ-DwmYa2xy.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])),
          "../schemas/de-DE.ts": () => m(() => import("./de-DE-DwmYa2xy.js"), __vite__mapDeps([6, 1, 2, 3, 4, 5])),
          "../schemas/es-ES.ts": () => m(() => import("./es-ES-DwmYa2xy.js"), __vite__mapDeps([7, 1, 2, 3, 4, 5])),
          "../schemas/fr-BE.ts": () => m(() => import("./fr-BE-DwmYa2xy.js"), __vite__mapDeps([8, 1, 2, 3, 4, 5])),
          "../schemas/fr-FR.ts": () => m(() => import("./fr-FR-CzBeU_I8.js"), __vite__mapDeps([9, 1, 2, 3, 4, 5])),
          "../schemas/nl-BE.ts": () => m(() => import("./nl-BE-CuetaDXi.js"), __vite__mapDeps([10, 1, 2, 3, 4, 5])),
          "../schemas/nl-NL.ts": () => m(() => import("./nl-NL-CuetaDXi.js"), __vite__mapDeps([11, 1, 2, 3, 4, 5])),
          "../schemas/pl-PL.ts": () => m(() => import("./pl-PL-CuetaDXi.js"), __vite__mapDeps([12, 1, 2, 3, 4, 5])),
          "../schemas/sk-SK.ts": () => m(() => import("./sk-SK-CuetaDXi.js"), __vite__mapDeps([13, 1, 2, 3, 4, 5]))
        }), `../schemas/${s.locale}.ts`, 3)), i = await i, p(), i),
        u = N(!1),
        C = a => {
          a.target.value === L.COMPANY ? u.value = !0 : u.value = !1
        };
      d.invoiceAddress.address.salutation === L.COMPANY && s.featureToggle.showSalutation && (u.value = !0);
      const q = a => {
          if (s.featureToggle.sirenNumberEnabled && a.target.name.includes("vatNumber")) {
            const l = d.invoiceAddress.vatNumber.replace(/\s/g, "");
            l.length >= 9 && (d.invoiceAddress.sirenNumber = l.substring(l.length - 9))
          }
        },
        U = () => f.countries.countryCodes.map(l => ({
          label: e(`CountryNames.${l}`),
          value: l
        })),
        k = new I(h);
      k.applyOverrides({
        salutation: {
          label: e("addressForm.salutation"),
          options: te(),
          model: "salutation",
          autocomplete: "off",
          hasFields: !1,
          rules: s.validationRules.salutation
        }
      });
      const B = F(() => {
          const a = new I(y);
          return a.applyOverrides({
            company: {
              label: e("addressForm.fields.company"),
              model: "company",
              autocomplete: "off",
              rules: s.validationRules.company
            },
            vatNumber: {
              label: e("addressForm.fields.vatNumber"),
              model: "vatNumber",
              autocomplete: "off",
              rules: s.validationRules.vatNumber
            },
            sirenNumber: {
              label: e("addressForm.fields.sirenNumber"),
              model: "sirenNumber",
              rules: "",
              disabled: "disabled",
              autocomplete: "off",
              placeholder: e("addressForm.fields.filledAutomatically")
            }
          }), a
        }),
        j = F(() => {
          const a = new I(n);
          return a.applyOverrides({
            company: {
              label: e("addressForm.fields.company"),
              model: "company",
              rules: s.validationRules.company
            },
            firstName: {
              label: e("addressForm.fields.firstName"),
              autocomplete: "invoice given-name",
              model: "firstName",
              rules: s.validationRules.firstName
            },
            lastName: {
              label: e("addressForm.fields.lastName"),
              autocomplete: "invoice family-name",
              model: "lastName",
              rules: s.validationRules.lastName
            },
            countryCode: {
              label: e("addressForm.fields.country"),
              options: U(),
              autocomplete: "off",
              model: "countryCode",
              rules: s.validationRules.countryCode
            },
            additionalInformation: {
              label: e("addressForm.fields.additionalInformation"),
              expanded: s.featureToggle.additionalInfoFieldExpanded,
              expandableLabel: e("addressForm.fields.collapsible.additionalInformation"),
              autocomplete: "invoice address-line1",
              model: "additionalInformation",
              rules: s.validationRules.additionalInformation
            },
            postalCode: {
              label: e("addressForm.fields.postalCode"),
              autocomplete: "invoice postal-code",
              model: "postalCode",
              rules: "required",
              mask: oe(d.invoiceAddress.address.countryCode)
            },
            city: {
              label: e("addressForm.fields.city"),
              autocomplete: "invoice address-level2",
              model: "city",
              rules: s.validationRules.city
            },
            street: {
              label: e("addressForm.fields.streetName"),
              autocomplete: "invoice street-address",
              model: "street",
              rules: s.validationRules.street
            },
            streetNumber: {
              label: e("addressForm.fields.streetNumber"),
              autocomplete: "invoice house-number",
              model: "streetNumber",
              rules: s.validationRules.streetNumber
            }
          }), a
        }),
        H = F(() => {
          let a = s.validationRules.birthdate;
          return s.featureToggle.birthdateSectionRequired && (a = P("required", a), a = a.replace(/required/, "birthDateRequired")), a = P("birthDate", a), a
        }),
        G = F(() => {
          const a = new I(_);
          return a.applyOverrides({
            phoneNumber: {
              label: e("addressForm.fields.phoneNumber"),
              autocomplete: "tel",
              expandable: !0,
              expanded: s.featureToggle.phoneSectionExpanded,
              expandableLabel: e("addressForm.fields.collapsible.phoneNumber"),
              model: "phoneNumber",
              rules: s.validationRules.phoneNumber
            },
            birthDate: {
              label: e("addressForm.fields.birthDate.title"),
              component: le.BirthDate,
              expandable: s.featureToggle.birthdateSectionEnabled,
              expandableLabel: e("addressForm.fields.collapsible.birthDate"),
              expanded: s.featureToggle.birthdateSectionExpanded,
              model: "birthDate",
              hasFields: !1,
              rules: H.value
            }
          }), s.featureToggle.birthdateSectionEnabled || a.delete("birthDate"), a
        });
      return (a, l) => (r(), S(O, null, [t(s)
        .featureToggle.showSalutation ? (r(), c(A, {
          key: 0,
          name: "InvoiceAddressForm",
          modelValue: o.value.address,
          "onUpdate:modelValue": l[0] || (l[0] = b => o.value.address = b),
          schema: t(k)
            .get(),
          class: "a-field-set-invoice",
          onInput: C
        }, null, 8, ["modelValue", "schema"])) : g("", !0), u.value && t(s)
        .featureToggle.companySalutationEnabled ? (r(), c(A, {
          key: 1,
          name: "InvoiceAddressForm",
          modelValue: o.value,
          "onUpdate:modelValue": l[1] || (l[1] = b => o.value = b),
          schema: B.value.get(),
          class: "a-field-set-invoice",
          onInput: q
        }, null, 8, ["modelValue", "schema"])) : g("", !0), T(A, {
          name: "InvoiceAddressForm",
          modelValue: o.value.address,
          "onUpdate:modelValue": l[2] || (l[2] = b => o.value.address = b),
          schema: j.value.get(),
          components: t(w),
          class: "a-field-set-invoice"
        }, null, 8, ["modelValue", "schema", "components"]), (r(), c(x, null, {
          default: E(() => [T(A, {
            name: "InvoiceAddressForm_additionalFields",
            modelValue: o.value,
            "onUpdate:modelValue": l[3] || (l[3] = b => o.value = b),
            schema: G.value.get(),
            components: t(w),
            class: "a-field-set-invoice_additional-fields"
          }, null, 8, ["modelValue", "schema", "components"])]),
          _: 1
        }))
      ], 64))
    }
  }),
  be = ve(fe, [
    ["__scopeId", "data-v-29ec7433"]
  ]),
  _e = Z("setInvoice", () => {
    const v = N(!1),
      i = N(null),
      p = N([]);

    function f() {
      v.value = !1, i.value = null, p.value = []
    }
    async function d(o) {
      f();
      try {
        const e = de(o);
        await ie(`${z}`, e), v.value = !0
      } catch (e) {
        ne(e, 401), console.log(e), i.value = !0, "data" in e.response && "messages" in e.response.data && e.response.data.messages.length > 0 && (p.value = e.response.data.messages.map(h => h.defaultMessage))
      }
    }
    return {
      invoiceUpdateSuccess: v,
      setInvoice: d,
      onRequestError: i,
      errorMessages: p
    }
  }),
  ge = {
    key: 1,
    class: "wrapper"
  },
  he = {
    class: "ods-typography-headline-1-prominent"
  },
  ye = {
    class: "wrapper-white"
  },
  Ae = M({
    __name: "InvoiceAddressPage",
    setup(v) {
      const {
        handleSubmit: i
      } = W(), {
        fetchDataCountries: p,
        dataCountries: f
      } = ue(), d = $(), o = _e(), e = me(), h = F(() => (e.resetSuggestedData(), o.invoiceUpdateSuccess)), y = i(n => {
        o.setInvoice(n)
      });
      return X(() => {
        p(), d.getAddress()
      }), (n, _) => (r(), S(O, null, [t(d)
        .errorMessages.length > 0 ? (r(), c(t(D), {
          key: 0,
          title: n.$t("addressForm.errors.title"),
          icon: !0,
          closable: !1,
          type: "danger",
          closed: void 0
        }, null, 8, ["title"])) : g("", !0), t(f) ? (r(), S("div", ge, [V("h1", he, R(n.$t("addressForm.invoiceTitle")), 1), h.value ? (r(), c(t(D), {
            key: 0,
            title: n.$t("addressForm.successMessage.invoiceHeader"),
            icon: !0,
            closable: !1,
            type: "success"
          }, {
            default: E(() => [se(R(n.$t("addressForm.successMessage.invoiceContent")), 1)]),
            _: 1
          }, 8, ["title"])) : g("", !0), t(o)
          .onRequestError ? (r(), c(t(D), {
            key: 1,
            title: n.$t("addressForm.errors.title"),
            icon: !0,
            closable: !1,
            type: "danger"
          }, {
            default: E(() => [(r(!0), S(O, null, ae(t(o)
              .errorMessages, (u, C) => (r(), S("p", {
                key: C
              }, R(u), 1))), 128))]),
            _: 1
          }, 8, ["title"])) : g("", !0), V("div", ye, [V("form", {
            onSubmit: _[1] || (_[1] = ee((...u) => t(y) && t(y)(...u), ["prevent"]))
          }, [(r(), c(x, null, {
            default: E(() => [t(f) !== null ? (r(), c(be, {
              key: 0,
              modelValue: t(d)
                .invoiceAddress,
              "onUpdate:modelValue": _[0] || (_[0] = u => t(d)
                .invoiceAddress = u),
              countries: t(f)
            }, null, 8, ["modelValue", "countries"])) : (r(), c(t(ce), {
              key: 1
            }))]),
            _: 1
          }))], 32)]), T(t(pe), {
            as: "button",
            onClick: t(y),
            class: "m-t-32",
            "data-qa": "submit-button",
            label: n.$t("addressForm.saveChanges")
          }, null, 8, ["onClick", "label"])
        ])) : g("", !0)
      ], 64))
    }
  });
export {
  Ae as
  default
};