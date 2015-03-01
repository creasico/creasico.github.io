<?php

if (isset($_SERVER['X-Github-Event'])) {
	`git pull`;
} else {
	echo 'Not allowed';
}
