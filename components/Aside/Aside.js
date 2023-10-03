class Aside {
  render() {
    const htmlAside = `<div class="aside"></div>`
    ROOT_ASIDE.innerHTML = htmlAside
  }
}
const aside = new Aside()

aside.render()
