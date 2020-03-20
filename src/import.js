// Context module doesn't seem to respect the import order
// and beforeImport has to be executed before Prism
import './beforeImport.js'
import prism from "prismjs";
export default prism