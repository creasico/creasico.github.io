<?php
echo '<pre>'.print_r($_SERVER, true).'</pre>';

if (isset($_SERVER['X-Github-Event'])) {
	`git pull`;
} else {
	echo 'Not allowed';
}
