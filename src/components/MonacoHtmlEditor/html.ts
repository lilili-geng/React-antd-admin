export const htmlString = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>loading_box</title>
		<style>
		div {
            width: 100%;
  		    text-align: center;
			font-size:80px;
            color: cornflowerblue;
			animation: animate 0.5s linear infinite;
        }

        @keyframes animate {
        
            0%,
            25% {
                text-shadow: 2px 2px 2px #ff6384;
            }

            50% {
                text-shadow: 2px -2px 2px #ff6384;
            }

            75% {
                text-shadow: -2px 2px 2px #ff6384;
            }

            100% {
                text-shadow: -2px -2px 2px #ff6384;
            }
                
        }
		</style>
	</head>
	<body>
		<div>AnimationTemplate</div>
	</body>
</html>
`
