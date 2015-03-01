<?php

if (isset($_SERVER['X-Github-Event'])) {
	`git pull`;

	echo '<pre>'.print_r($_SERVER, true).'</pre>';
} else {
	echo 'Not allowed';
}
