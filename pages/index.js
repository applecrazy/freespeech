import Box from '../components/box'

const Index = () => (
	<>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
		<style jsx>{`
			div {
				text-align: center;
			}
			p {
				font-size: 4vw;
			}
			.grid {
				margin: 0 auto;
				width: 80%;
				height: 80%;
				font-size: 1rem;
			}
			.row{
				display: flex
			}
			.grid {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%)
			}
		`}</style>
		<div className="grid" style={{ marginTop: '-10%' }}>
			<center>
				<h1>Freespeech</h1>
			</center>
			<center>
				<h3>Home</h3>
			</center>
			<center><select id="voices"> </select> </center>
			<div id="content">
				<div className="row">
					<Box backgroundColor="#34495E" text="Welcome" />
					<Box backgroundColor="#34495E" text="to" />
					<Box backgroundColor="#34495E" text="FreeSpeech" />
				</div>
				<div className="row">
					<Box backgroundColor="#34495E" />
					<Box backgroundColor="#34495E" />
					<Box backgroundColor="#34495E" />
				</div>
				<div className="row">
					<Box backgroundColor="#34495E" />
					<Box backgroundColor="#34495E" />
					<Box backgroundColor="#34495E" />
				</div>
			</div>
		</div>
	</>
)

export default Index