#!/usr/bin/perl

print "Hello, world!\n";


our %opt = ();
my %cli_options = ();
{
    my %options = (
        'gui'                   => \$opt{gui},
        'o|output=s'            => \$opt{output},
        
        'save=s'                => \$opt{save},
        'load=s@'               => \$opt{load},
        'autosave=s'            => \$opt{autosave},
        'ignore-nonexistent-config' => \$opt{ignore_nonexistent_config},
        'no-plater'             => \$opt{no_plater},
        'gui-mode=s'            => \$opt{gui_mode},
        'datadir=s'             => \$opt{datadir},
        'export-svg'            => \$opt{export_svg},
        'merge|m'               => \$opt{merge},
        'repair'                => \$opt{repair},
        'info'                  => \$opt{info},
    );
print %options;
    foreach my $opt_key (keys %{$Slic3r::Config::Options}) {
        my $cli = $Slic3r::Config::Options->{$opt_key}->{cli} or next;
	
        # allow both the dash-separated option name and the full opt_key
        $options{ "$opt_key|$cli" } = \$cli_options{$opt_key};
    }
    
    ;
}

