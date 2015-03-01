<?php

if (isset($_SERVER['HTTP_X_GITHUB_EVENT'])) {
	`git pull`;
	http_response_code(202);
	echo 'Depl '.$_SERVER['HTTP_X_GITHUB_DELIVERY'].' Success!';
} else {
	http_response_code(403);
	echo 'Not allowed!';
}
