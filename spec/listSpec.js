describe("Test suite", function() {
  var $list, $items;

  beforeEach(function() {
    $list = $(".list");
    $items = $list.find(".item");
  });

  describe("Initialization", function() {

    it("finds list element", function() {
      expect($list.length).toEqual(1);
    });

    it("generates and appends 100 items to list element", function() {
      expect($items.length).toEqual(100);
    });

  });

  describe("Functionality", function() {

    it("switches on 'item--clicked' class on click if item index is 3n", function() {
      $items.eq(2).click();
      expect($items.eq(2).hasClass("item--clicked")).toBeTruthy();

      $items.eq(5).click();
      expect($items.eq(5).hasClass("item--clicked")).toBeTruthy();
    });

    it("switches off 'item--clicked' if it's active on 3n item", function() {
      $items.eq(2).click();
      expect($items.eq(2).hasClass("item--clicked")).toBeFalsy();

      $items.eq(5).click();
      expect($items.eq(5).hasClass("item--clicked")).toBeFalsy();
    });

    it("doesn't toggle 'item--clicked' class on click if item index is not 3n", function() {
      $items.eq(1).click();
      $items.eq(4).click();
      expect($items.eq(1).hasClass("item--clicked")).toBeFalsy();
      expect($items.eq(4).hasClass("item--clicked")).toBeFalsy();
    });

  });
});
