/*
 * SURITTEC
 * Copyright 2015, TTUS TECNOLOGIA DA INFORMACAO LTDA, 
 * and individual contributors as indicated by the @authors tag
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

jQuery( document ).ready(function( $ ) {
    setupAppComponents();
});

var setupAppComponents = function () {
    
	// Highlight fields on form validation errors
    $('.text-danger').parents('.form-group').addClass('has-error');
    $('.ui-state-error').parents('.form-group').addClass('has-error');
    
    // Map Primefaces icons to Bootstrap's
    $('.ui-icon').addClass('glyphicon');
    $('.ui-icon-seek-first').addClass('glyphicon-fast-backward').empty();
    $('.ui-icon-seek-prev').addClass('glyphicon-step-backward').empty();
    $('.ui-icon-seek-next').addClass('glyphicon-step-forward').empty();
    $('.ui-icon-seek-end').addClass('glyphicon-fast-forward').empty();
    $('.ui-icon-carat-2-n-s').addClass('glyphicon-sort');
    $('.ui-icon-triangle-1-s').addClass('caret');
    $('.ui-icon-arrow-1-e').addClass('glyphicon-step-forward');
    $('.ui-icon-arrowstop-1-e').addClass('glyphicon-fast-forward');
    $('.ui-icon-arrow-1-w').addClass('glyphicon-step-backward');
    $('.ui-icon-arrowstop-1-w').addClass('glyphicon-fast-backward');

    // Map Primefaces button style to Bootstrap's
    $('.ui-button').addClass('btn');

    // Datatable styles
    $('.ui-datatable-tablewrapper').addClass('table-responsive');
    $('.ui-column-filter.ui-inputfield').addClass('form-control input-sm pull-left').css("width", "90%");

    // Pulldown
    $('.pull-down').each(function () {
        $(this).css('margin-top', $(this).parent().height() - $(this).height());
    });

    // Messages
    $('.facesMessage').prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
    $('.facesMessageFadeOut').delay(7000).fadeOut();

    // Table Filter
    $('.filter-label').click(function () {
        $(this).parent().next().show().focus();
    });
	
	// Tree
    $('.ui-tree').each(function () {
        var tree = $(this);
        var treeTogglers = tree.find('.ui-tree-toggler');
        treeTogglers.removeClass('caret').addClass('glyphicon-plus');
    });
    
    // Pick List
    $('.ui-picklist-button-add, .ui-picklist-button-add-all, .ui-picklist-button-remove, .ui-picklist-button-remove-all').addClass('btn-default');

    $('.ui-picklist').each(function () {
        var pickList = $(this);
        var lists = pickList.children('div:first-child, div:last-child');
        var filterContainerClass = '.ui-picklist-filter-container';
        var filtersFound = 0;

        // Fixes the pickList parent if it's a grid column
        if (pickList.parent().attr('class').indexOf('col-') >= 0) {
            pickList.parent().css('width', 'auto');
        }

        // Styles the filter input
        lists.children(filterContainerClass).each(function () {
            var listContainer = $(this);
            var listTitle = listContainer.next('.ui-picklist-caption').text();
            listContainer.children('input').addClass('form-control')
                .attr('placeholder', 'Filtrar "' + listTitle + '"...');
            filtersFound++;
        });

        if (filtersFound == 1) {
            // Fixes filter input's width
            pickList.addClass('with-filter');
            var newWidth = pickList.parent().width();
            pickList.children(0).children(filterContainerClass).css('width', newWidth);
        } else if (filtersFound == 2) {
            // Pushes the buttons bar a bit
            pickList.children('.ui-picklist-buttons').addClass('');
        }
    });
    
    
    // Calendar
    $('.ui-datepicker-trigger')
    	.attr('class', 'ui-datepicker-trigger btn btn-primary')
    	.html('<span class="glyphicon glyphicon-calendar"></span>');

    $('.hasDatepicker').addClass('form-control').parent('span').addClass('datepicker-container');
    
    // Switch Checkbox
    $(".switchCheckbox").bootstrapSwitch({
        onText: 'I',
        offText: '0'
    }); 
    
    // Tooltip
    $('.tooltip-top').attr('data-toggle', 'tooltip').attr('data-placement', 'top').tooltip();
    $('.tooltip-bottom').attr('data-toggle', 'tooltip').attr('data-placement', 'bottom').tooltip();
    $('.tooltip-left').attr('data-toggle', 'tooltip').attr('data-placement', 'left').tooltip();
    $('.tooltip-right').attr('data-toggle', 'tooltip').attr('data-placement', 'right').tooltip();
	
};