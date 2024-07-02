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
					sx={{
						textAlign: "center",
						fontSize: "50px",
						color: "white",
					}}>
					Проект
				</Typography>
				<Typography sx={{ color: "white" }}>Айдин</Typography>
				<Typography sx={{ color: "white" }}>Адилет байке</Typography>
				<Typography sx={{ color: "white" }}>Хадиша</Typography>
			</Box>
		</div>
	);
};

export default Header;
