import {
  bQ as n,
  bT as a,
  bU as o,
  bV as i
} from "./CAkCZjNM.js";
const R = n(() => {
  const {
    query: e
  } = a(), s = i();
  if (sessionStorage.getItem(o)) return;
  const r = e.original_ref;
  if (r) {
    sessionStorage.setItem(o, r);
    const t = {
      ...e
    };
    delete t.original_ref, s.replace({
      query: t
    })
  }
});
export {
  R as
  default
};