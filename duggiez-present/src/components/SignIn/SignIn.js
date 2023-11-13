import react from "react";
import css from './css/Sidebar.module.css';

const Sidebar = (props) =>
<div className={CSS.sidebar}>
<a href="">My Photos {props.name}</a>
<br/>
<a href="">My Videos</a>
<br/>
<a href="">More</a>
</div>
export default Sidebar