<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon,title } = context
    const vnodes = []
    icon && vnodes.push(<svg-icon icon-class={icon} />)
    title && vnodes.push(<span slot="title">{{title}}</span>)
    return vnodes
  }
}
</script>