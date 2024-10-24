export default function formatComponentName(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
}
