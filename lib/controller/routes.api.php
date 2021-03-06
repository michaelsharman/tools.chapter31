<?php

$routes = array_merge_recursive($routes, [
    'get' => [
        '/api/base64' => function() use ($config, $input) {
            $content = $input['content'];
            $action = $input['action'];
            $return = "";

            if ($action == "encode") {
                $return = base64_encode($content);
            } else if ($action == "decode") {
                $return = htmlspecialchars(base64_decode($content), 0, "UTF-8");
            }

            echo $return;
        },

        '/api/entitize' => function() use ($config, $input) {
            $content = $input['content'];
            $quotestyle = $input['quotestyle'];
            $replacetype = $input['replacetype'];
            $maxlength = 10000;
            $types = array('ENT_COMPAT' => 2, 'ENT_QUOTE_SINGLE' => 1, 'ENT_QUOTES' => 3, 'ENT_NOQUOTES' => 0);

            // Set the maxlength of the input string
            if (strlen($content) > $maxlength) {
                $content = substr($content, 0, $maxlength) . 'TRUNCATED TEXT...ONLY ' . $maxlength . ' CHARACTERS ALLOWED!';
            }

            // Make sure we have valid `options` submitted with the form
            if (!array_key_exists($replacetype, array('all' => '', 'special' => ''))) {
                $replacetype = 'special';
            }
            if (!array_key_exists($quotestyle, $types)) {
                $quotestyle = 2;
            } else {
                $quotestyle = $types[$quotestyle];
            }

            if ($replacetype === 'all') {
                echo htmlentities($content, $quotestyle, "UTF-8");
            } else {
                echo htmlspecialchars($content, $quotestyle, "UTF-8");
            }
        },

        '/api/markdown' => function() use ($config, $input) {
            try {
                $md = $input['content'];
                $extra = $input['extra'];
                if ($extra == 1) {
                    echo \Michelf\Markdown::defaultTransform($md);;
                } else {
                    echo \Michelf\MarkdownExtra::defaultTransform($md);;
                }
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        },

        '/api/striptags' => function() use ($config, $input) {
            $content = $input['content'];
            $maxlength = 10000;

            // Set the maxlength of the input string
            if (strlen($content) > $maxlength) {
                $content = substr($content, 0, $maxlength) . 'TRUNCATED TEXT...ONLY ' . $maxlength . ' CHARACTERS ALLOWED!';
            }

            echo preg_replace( '/\s+/', ' ', (strip_tags($content)));
        },

        '/api/tidy' => function() use ($config, $input) {
            $content = $input['tidy-content'];
            $indent = !is_null($input['op-indent']);
            $hideComments = !is_null($input['op-hide-comments']);
            $showBody = !is_null($input['op-show-body-only']);
            $encloseBlockText = !is_null($input['op-enclose-block-text']);
            $indentSpaces = $input['op-indent-spaces'];
            $wrap = $input['op-wrap'];
            $type = $input['op-type'];

            // See here for more options http://tidy.sourceforge.net/docs/quickref.html
            $config = array(
                    'indent'             => $indent,         // This option specifies if Tidy should indent block-level tags.
                    'indent-spaces'      => $indentSpaces,
                    'wrap'               => $wrap,           // This option specifies the right margin Tidy uses for line wrapping. Tidy tries to wrap lines so that they do not exceed this length. Set wrap to zero if you want to disable line wrapping.
                    'tidy-mark'          => false,           // Add a meta element to the document head to indicate that the document has been tidied
                    'show-body-only'     => $showBody,           // (HTML only) This option specifies if Tidy should print only the contents of the body tag as an HTML fragment.
                    'force-output'       => true,                // This option specifies if Tidy should produce output even if errors are encountered.
                    'hide-comments'      => $hideComments,       // Strips all comments
                    'enclose-block-text' => $encloseBlockText,       // Insert a <P> element to enclose any text it finds in any element that allows mixed content
                    'enclose-text'       => $encloseBlockText,
                    'markup'             => true                 // This option specifies if Tidy should generate a pretty printed version of the markup. Note that Tidy won't generate a pretty printed version if it finds significant errors (see force-output).
            );

            switch(strtolower($type)) {
                case 'html':
                    $config['output-html'] = true;  // Outputs the data in pretty HTML format
                    break;
                case 'xhtml':
                    $config['output-xhtml'] = true; // Outputs the data in pretty XHTML format (checking consistency)
                    break;
                case 'xml':
                    $config['input-xml'] = true;    // Use the XML parser rather than the error correcting HTML parser
                    $config['output-xml'] = true;   // Outputs the data as well-formed XML
                    break;
                default:
                    $config['output-html'] = true;
                    break;
            }

            try {
                $tidy = new tidy;
                $tidy->parseString($content, $config, 'utf8');
                $tidy->cleanRepair();
            } catch (Exception $e) {
                $tidy = "Problem calling tidy ;(";
                //$tidy = $e->getMessage();
            }
            echo htmlspecialchars($tidy);
        },

        '/api/uuid' => function() use ($config, $input) {
            $format = $input['format'];
            $textUpper = $input['textUpper'];
            $version = $input['version'];
            $validVersions = array("3","4","5");
            $randomString = "F135E5D0-141B-11E2-892E-0800200C9A66";
            if (in_array($version, $validVersions)) {
                try {
                    include_once $config['paths']['packages'] . '/com/chapter31/uuid.php';
                    $method = 'v'.$version;
                    // Generate the UUID
                    switch ($method) {
                        case "v4":
                            $uuid = UUID::v4();
                            break;
                        case "v3":
                        case "v5":
                            $uuid = UUID::$method(UUID::v4(), $randomString);
                            break;
                        default:
                            $uuid = "Invalid";
                    }
                    $result = ($textUpper) ? strToUpper($uuid) : strToLower($uuid);
                    // Change the format of the uuid
                    switch ($format) {
                        case "coldfusion":
                            $result = substr_replace($result, "", strripos($result, "-"), 1);
                            break;
                        default:
                            break;
                    }
                    if (UUID::is_valid($result)) {
                        echo $result;
                    } else {
                        echo "Invalid UUID, please try again";
                    }
                } catch (Exception $e) {
                    echo $e->getMessage();
                }
            } else {
                echo "Invalid version";
            }
        }
    ]
]);
