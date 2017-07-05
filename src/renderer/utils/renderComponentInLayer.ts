let instance
let instances = {}
let seed = 1

function destruct(id, userDestruct) {
    let inst = instances[id]
    if (inst) {
        if (typeof userDestruct === 'function') {
            userDestruct(inst)
        }
        delete instance[id]
    }
}

export default function renderComponentInLayer(
    layer,
    ComponentConstructor,
    destructHookName,
    options = {}
) {
    let id = 'isolate-component_' + seed++

    if (!Array.isArray(destructHookName)) {
        destructHookName = [destructHookName]
    }

    destructHookName.forEach(hook => {
        let userDestruct = options[hook]
        options[hook] = function() {
            destruct(id, userDestruct)
        }
    })

    instance = new ComponentConstructor({
        props: options
    })

    instance.id = id
    instance.vm = instance.$mount()
    layer.appendChild(instance.vm.$el)
    instance.vm.visible = true

    instances[id] = instance
    return instance.vm
}