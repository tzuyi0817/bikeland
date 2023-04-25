import { updateToken } from '@/apis/common';

export default defineNuxtPlugin(async(nuxtApp) => {
  // const { fetchSupplierList } = useSupplierStore(nuxtApp.$pinia);
  await Promise.all([
    updateToken(),
  ]);
});
