import { createDecorator } from "vue-class-component";

export function State(selector) {
    return createDecorator((options, key) => {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get() {
              return selector(this.$store.state);
            },
          }
    });
}