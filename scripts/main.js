require(
    ['jquery', 'vm/indexViewModel', 'pager', 'knockout', 'bootstrap'],
    function ($, indexViewModel, pager, ko) {
        pager.extendWithPage(indexViewModel);
        ko.applyBindings(indexViewModel);
        pager.start(indexViewModel);
});