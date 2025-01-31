import Vue from "vue";
import { VueQueryPlugin, QueryClient, hydrate } from "vue-query";

export default (context) => {
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 } },
  });
  const options = { queryClient };

  Vue.use(VueQueryPlugin, options);

  if (process.client) {
    if (context.nuxtState && context.nuxtState["vue-query"]) {
      hydrate(queryClient, context.nuxtState["vue-query"]);
    }
  }
};
