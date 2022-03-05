function _itemsVisible(resourceModule : Element, button:HTMLElement): void {
  const resources: Array<Element> | null = [
    ...resourceModule.querySelectorAll(`.${SELECTORS.RESOURCE_BULLET}`),
  ];
  resourcesInList = resources.length;
  const resourcesVisibile: Array<Element> | null = resources.slice(0, RESOURCE_TO_SHOW);
  button.classList.add(HIDE)
  if (resourcesInList > 0) {
    resources.forEach((item) => {
      const resource = item as HTMLElement;
      resource.classList.add(HIDE)
      if (resourcesInList > RESOURCE_TO_SHOW) {
        button.classList.remove(HIDE)
      }
    });
  }

  resourcesVisibile.forEach((item) => {
    const resource = item as HTMLElement;
    resource.classList.remove(HIDE)
    resource.classList.add(VISIBLE)
  })

}

function _showMoreResources(resourceModule : Element, button: HTMLElement): void {
  const resourcesVisible: Array<Element> | null = [
    ...resourceModule.querySelectorAll(`.${VISIBLE}`),
  ];
  const resourcesHidden: Array<Element> | null = [
    ...resourceModule.querySelectorAll(`.${HIDE}`),
  ];
  const nowShowing = resourcesVisible.length;
  const nowHidden = resourcesHidden.length;

  if (nowHidden < RESOURCE_TO_SHOW) {
    resourcesHidden.map((item) => {
      const resource = item as HTMLElement;
      resource.classList.remove(HIDE)
      resource.classList.add(VISIBLE)
    })
    button.classList.add(HIDE)
  } else {
    const resourcesHiddenCount: Array<Element> | null = resourcesHidden.slice(0, RESOURCE_TO_SHOW);
    resourcesHiddenCount.forEach((item) => {
      const resource = item as HTMLElement;
      resource.classList.remove(HIDE)
      resource.classList.add(VISIBLE)
    })
  }
  if (nowShowing >= resourcesInList) {
    button.classList.add(HIDE)
  }
}