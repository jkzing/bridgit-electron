import Vue from 'vue'
import Component from 'vue-class-component'

let instance
let instances = {}
let seed = 1

type AlertType = 'success' | 'info' | 'primary' | 'secondary' | 'warning'

@Component({})
class AlertConstructor extends Vue {
    value = false
    message = ''
    duration = 3000
    timer: any
    onClose: Function
    type: AlertType = 'success'

    mounted() {
        if (this.duration > 0) {
            this.timer = setTimeout(() => {
                if (this.value) {
                    this.close();
                }
            }, this.duration);
        }
    }
    close() {
        if (typeof this.onClose === 'function') {
            this.onClose()
        }
        this.value = false
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.destroy()
    }

    destroy() {
        this.$destroy()
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
    }

    render(h) {
        return h('v-alert', {
            class: ['global-alert'],
            props: {
                value: this.value,
                dismissible: true,
                [this.type]: true
            },
            on: {
                input: val => !val && this.close()
            }
        }, this.message)
    }
}

function destruct(id, userDestruct) {
    let inst = instances[id]
    if (inst) {
        if (typeof userDestruct === 'function') {
            userDestruct(inst)
        }
        delete instance[id]
    }
}

export default function Alert(options: any = {}) {
    if (Vue.prototype.$isServer) return;
    let id = 'isolate-component_' + seed++

    let userDestruct = options.onClose
    options.onClose = function() {
        destruct(id, userDestruct)
    }

    instance = new AlertConstructor({
        data: options
    });

    instance.id = id
    let vm = instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)

    instances[id] = instance
    vm.value = true;
    return vm;
}