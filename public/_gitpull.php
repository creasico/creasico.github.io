<?php

if (isset($_SERVER['HTTP_X_GITHUB_EVENT'])) {
	`git pull`;

	echo '<pre>'.print_r($_SERVER, true).'</pre>';
} else {
	echo 'Not allowed';
}
