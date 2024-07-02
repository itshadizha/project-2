import { Box, Typography } from "@mui/material";

const Header = () => {
	return (
		<div>
			<Box
				sx={{
					width: "100%",
					height: "100px",
					backgroundColor: "black",
				}}>
				<Typography
					sx={{ textAlign: "center", fontSize: "50px", color: "white" }}>
					Проект
				</Typography>
			</Box>
		</div>
	);
};

export default Header;
