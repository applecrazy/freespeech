const Box = props => (
	<div className="box" style={{ backgroundColor: props.backgroundColor || 'tomato' }}>
		<style jsx>{`
			.box {
				margin: 5px;
				color: white;
				font-weight: bold; 
				flex: 1 0 auto;
				position: relative;
				opacity: 1;
				transition: .3s;
				font-size: 2rem;
			}
			.box:active {
				transform: scale(.9);
			}
			.box:hover {
				opacity: .8;
			}
			.box:after {
				content: "";
				float: left;
				display: block;
				padding-top: 100%;
			}
			.box .inner {
				position:absolute;
				left: 0;
				right: 0;
				bottom: 0;
				top: 0;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		`}</style>
		<a onclick="Speak(this);">
			<div className="inner">
				<p data-spokenvalue="Welcome">{props.text || ' '}</p>
			</div>
		</a>
	</div>
)

export default Box