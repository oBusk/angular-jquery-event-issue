function hook(event: JQuery.Event) {
    console.log(event);
}

const element = document.createElement('div');
const $element = $(element);

$element.on('click', hook);