/* Generated Wed Apr 27 2016 13:53:18 GMT-0300 (Hora oficial do Brasil) */
$(document).ready(function(){
    'use strict';

    //TELEFONE
    var nineDigitsMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        nineDigitsOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(nineDigitsMaskBehavior.apply({}, arguments), options);
            },
            placeholder: '(__) ____-____',
            clearIfNotMatch: true
        };

    $('.mask-telephone').mask(nineDigitsMaskBehavior, nineDigitsOptions);

    //CPF
    $('.mask-cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__',
        clearIfNotMatch: true
    });

    //CPF
    $('.mask-cnpj').mask('00.000.000/0000-00', {
        placeholder: '__.___.___/____-__',
        clearIfNotMatch: true
    });

    //CEP
    $('.mask-cep').mask('00.000-000', {
        placeholder: '__.___-___',
        clearIfNotMatch: true
    });

    //URL
    $('.mask-url').mask('httpW://XYY', {
        //clearIfNotMatch: true,
        translation: {
            W: {pattern: /s/, optional: true},
            X: {pattern: /[a-z]/},
            Y: {pattern: /./, recursive: true}
        }
    });

    //NÚMERO
    $('.mask-number:not(.accept-negative-value)').mask('########################0', {
        clearIfNotMatch: true,
        recursive: true
    });
    $('.mask-number.accept-negative-value').maskMoney({
        thousands: '',
        decimal: '',
        allowNegative: true,
        allowZero: true,
        precision: 0
    });

    //DATA
    $('.mask-date:not(.no-placeholder)').mask('00/00/0000', {
        placeholder: '__/__/____',
        clearIfNotMatch: true
    });
    $('.mask-date.no-placeholder').mask('00/00/0000', {
        placeholder: '',
        clearIfNotMatch: true
    });
    $('.mask-time:not(.no-placeholder)').mask('00:00:00', {
        placeholder: '__:__:__',
        clearIfNotMatch: true
    });
    $('.mask-time.no-placeholder').mask('00:00:00', {
        placeholder: '',
        clearIfNotMatch: true
    });
    $('.mask-date-time:not(.no-placeholder), .mask-datetime:not(.no-placeholder)').mask('00/00/0000 00:00:00', {
        placeholder: '__/__/____ __:__:__',
        clearIfNotMatch: true
    });
    $('.mask-date-time.no-placeholder, .mask-datetime.no-placeholder').mask('00/00/0000 00:00:00', {
        placeholder: '',
        clearIfNotMatch: true
    });

    //DINHEIRO
    $('.mask-money, .mask-currency').each(function () {
        var input = $(this);

        var config = {
            thousands: '.',
            decimal: ','
        };

        if (input.hasClass('accept-negative-value')) {
            config.allowNegative = true;
        }

        if (input.hasClass('accept-zero-value')) {
            config.allowZero = true;
        }

        input.maskMoney(config);
    });

    //FLOAT
    $('.mask-float:not(.accept-negative-value)').mask('##0.000', { reverse: true });

    $('.mask-float.accept-negative-value').maskMoney({
        thousands: '',
        decimal: '.',
        allowNegative: true,
        precision: 3
    });

    //DOUBLE
    $('.mask-double:not(.accept-negative-value)').mask('##0.00', { reverse: true });

    $('.mask-double.accept-negative-value').maskMoney({
        thousands: '',
        decimal: '.',
        allowNegative: true,
        precision: 2
    });

    //IP
    $('.mask-ip-address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });

    //PORCENTO
    $('.mask-percent').mask('##0,00%', { reverse: true });

    //HEXACOLOR
    $('.mask-hexacolor').mask('HCCCDDD', {
        translation: {
            'H': {
                pattern: '#'
            },
            'C': {
                pattern: /[0-9a-zA-Z]/
            },
            'D': {
                pattern: /[0-9a-zA-Z]/, optional: true
            }
        }
    });
});
/* Generated Wed Apr 27 2016 13:53:18 GMT-0300 (Hora oficial do Brasil) */
$(document).ready(function(){
    'use strict';

    //VALIDAÇÃO DE FORMULÁRIOS Semantic UI
    //Tradução das validações
    var validationTranslate = {
        empty                : '{name} deve ser preenchido',
        checked              : '{name} deve ser marcado',
        email                : '{name} deve conter um e-mail válido',
        url                  : '{name} deve conter uma url válida',
        regExp               : '{name} não está formatado corretamente',
        integer              : '{name} deve conter um número inteiro',
        decimal              : '{name} deve conter um número decimal',
        number               : '{name} deve conter um número',
        is                   : '{name} deve conter "{ruleValue}"',
        isExactly            : '{name} deve conter exatamente "{ruleValue}"',
        not                  : '{name} não pode conter "{ruleValue}"',
        notExactly           : '{name} não pode conter exatamente "{ruleValue}"',
        contain              : '{name} não contém "{ruleValue}"',
        containExactly       : '{name} não contém exatamente "{ruleValue}"',
        doesntContain        : '{name} deve conter "{ruleValue}"',
        doesntContainExactly : '{name} deve conter exatamente "{ruleValue}"',
        minLength            : '{name} deve conter pelo menos {ruleValue} caracteres',
        length               : '{name} deve conter {ruleValue} caracteres',
        exactLength          : '{name} deve conter exatamente {ruleValue} caracteres',
        maxLength            : '{name} não pode conter mais que {ruleValue} caracteres',
        match                : '{name} deve combinar com o campo {ruleValue}',
        different            : '{name} deve conter um valor diferente do campo {ruleValue}',
        creditCard           : '{name} deve conter um número de cartão de crédito válido',
        minCount             : '{name} deve ter pelo menos {ruleValue} opções',
        exactCount           : '{name} deve ter exatamente {ruleValue} opções',
        maxCount             : '{name} deve ter {ruleValue} ou menos opções'
    };
    //Usa meta attributos para setar validação
    $(".has-validation").each(function() {
        var form = $(this);
        var errorsInline = form.hasClass("errors-inline") ? true : false;

        var fields = {};

        form.find("[data-rule]").each(function() {
            var input = $(this);
            var inputIdentifier = input.attr("id");
            inputIdentifier = (inputIdentifier === undefined || inputIdentifier == "") ? input.attr("name") : inputIdentifier;

            if (inputIdentifier !== undefined && inputIdentifier != "") {
                var rules = [];
                var types = input.data("rule");
                var optional = input.data("rule-optional");
                var depends = input.data("rule-depends");
                var prompts = input.data("rule-prompt");
                prompts = (prompts === undefined) ? "" : prompts;

                var arrTypes = types.split('||');
                var arrPrompts = prompts.split('||');

                $.each(arrTypes, function(index, type) {
                    var prompt = arrPrompts[index];

                    var attrRule = {};

                    attrRule.type = type;

                    if (prompt !== undefined) {
                        attrRule.prompt = prompt;
                    }

                    rules.push(attrRule);
                });

                fields[inputIdentifier] = {
                    identifier  : inputIdentifier,
                    rules: rules
                };

                //Depends
                if (depends !== undefined && depends !== '') {
                    fields[inputIdentifier].depends = depends;
                }

                //Optional
                if (optional == true) {
                    fields[inputIdentifier].optional = true;
                }
            }
        });

        //Plugin
        form.form({
            on: 'submit',
            inline: errorsInline,
            fields: fields,
            prompt: validationTranslate,
            onFailure: function () {
                //Rola página até página de erro
                $('html, body').animate({
                    scrollTop: (form.offset().top - 50)
                }, 300);

                return false;
            }
        });
    });
});
//AÇAO QUANDO ESTÁ TROCANDO DE PÁGINA
$(window).on('beforeunload', function() {
    $("#pageLoading").show();
});

$(window).ready(function(){
    'use strict';

    function appendQueryString(url, queryVars) {
        var firstSeperator = (url.indexOf('?')==-1 ? '?' : '&');
        var queryStringParts = [];
        for(var key in queryVars) {
            queryStringParts.push(key + '=' + queryVars[key]);
        }
        var queryString = queryStringParts.join('&');
        return url + firstSeperator + queryString;
    }
    window.appendQueryString = appendQueryString;

    //ONLOAD
    $("#pageLoading").hide();

    //FUNÇÕES UTILITÁRIAS
    //Função que seta o CSRF-Token para requisições Ajax do Jquery
    function setAjaxCSRFTokenHeader(token) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token
            }
        });
    }
    //Seta token
    setAjaxCSRFTokenHeader($('body').data('token'));

    //ESCONDE MENU COM SUBMENUS VAZIOS
    $('.main-sidebar .treeview-menu').each(function () {
        var menu = $(this);

        if (! menu.find('li')[0]) {
            menu.parents('.treeview').remove();
        }
    });

    //CONFIRMAÇÃO DE AÇÃO - Pergunta antes de continuar
    $('body').on('click', '[data-confirm="true"]', function(e) {
        var $button = $(this);

        confirmationDialog(
            function(result) {
                if (result) {
                    $("#pageLoading").show();

                    window.location = $button.attr('href');
                }
            },
            ($button.data('confirm-danger') == true) ? true : false
        );

        e.preventDefault();
    });

    var confirmationDialog = function (callback, isDangerConfirmation, customMessage) {
        var buttonConfirmClass = (isDangerConfirmation) ? 'btn-danger' : 'btn-primary';

        var message = (customMessage !== undefined && customMessage !== '') ? customMessage : 'Deseja realmente continuar com esta ação?';
        message = (isDangerConfirmation) ? "Esta ação pode causar danos irreversíveis à aplicação. Deseja realmente continuar?" : message;

        //confirmation(element);
        bootbox.confirm({
            size: "small",
            className: (isDangerConfirmation) ? 'danger' : 'primary',
            message: message,
            buttons: {
                cancel: {
                    label: "Não"
                },
                confirm: {
                    label: "Sim",
                    className: buttonConfirmClass
                }
            },
            callback: callback
        });
    };
    window.confirmationDialog = confirmationDialog;

    //CRIA UM OBJECTO COM QUERY STRINGS DA ATUAL URL
    var queryStrings = (function(url) {
        if (url.search) {
            return url.search;
        }

        return null;
    })(window.location);

    //CONTROLA A VOLTA DA PÁGINA ATRAVÉS DO BOX DE AÇÕES
    var $btnGoBack = $('.box-actions .btn-go-back');
    if ($btnGoBack[0]) {
        //Se houver query string, adiciona ao link voltar
        var storedQueryStrings = sessionStorage.getItem('query_strings');

        $btnGoBack.each(function () {
            var button = $(this);

            if (button.hasClass('force-last-url')) {
                if (document.referrer) {
                    button.attr('href', document.referrer);
                }
            } else {
                if (storedQueryStrings) {
                    button.attr('href', button.attr('href') + storedQueryStrings);
                }
            }
        });
    } else {
        //Remove sessão com as queries strings
        sessionStorage.removeItem('query_strings');
    }

    //Salva em um sessão as queries strings
    if (queryStrings) {
        sessionStorage.setItem('query_strings', queryStrings);
    }

    //MOSTRA/ESCONDE ELEMENTOS CONFORME A MARCAÇÃO OU NÃO DE UM CHECKBOX
    $('input[data-toggle]').on('change', function() {
        var input = $(this);
        var target = $(input.data('toggle'));
        var inverseTarget = $(input.data('toggle-inverse'));
        var inverted = input.data('toggle-inverted');

        if (input.is(':checked')) {
            if (inverted) {
                target.hide();

                inverseTarget.show().removeClass('hidden');
            } else {
                target.show().removeClass('hidden');

                inverseTarget.hide();
            }
        } else {
            if (inverted) {
                target.show().removeClass('hidden');

                inverseTarget.hide();
            } else {
                target.hide();

                inverseTarget.show().removeClass('hidden');
            }
        }
    });
    $('input[data-toggle]').change();

    //MOSTRA/ESCONDE ELEMENTOS CONFORME A SELEÇÃO DE UM VALOR
    $('select[data-toggle]').on('change', function() {

        var select = $(this);
        var inverted = select.data('toggle-inverted');
        var target = $(select.data('toggle'));
        var triggerValue = select.data('toggle-trigger-value');

        if (select.val() == triggerValue) {
            if (inverted) {
                target.hide();
            } else {
                target.show().removeClass('hidden');
            }
        } else {
            if (inverted) {
                target.show().removeClass('hidden');
            } else {
                target.hide();
            }
        }
    });
    $('select[data-toggle]').change();

    //ATRAVÉS DA MUDANÇA DE UM SELECT CARREGA OPÇÕES DE UM OUTRO
    $('[data-load-select]').on('change', function () {
        var origin = $(this);

        var valueSelected = origin.val();
        var target = $(origin.data('load-select'));
        var targetTransfer = $(target.data('transfer-container'));

        var initialId = target.data('initial-id');

        //Retira opções anteriormente carregadas
        var oldOptions = target.find('option:not(.empty)');
        $(oldOptions).appendTo(targetTransfer);

        if (valueSelected != undefined && valueSelected != "") {
            //Novas opções conforme seleção do estado
            var options = targetTransfer.find('[data-filter-id="' + valueSelected + '"]');
            $(options).appendTo(target);

            target.val(initialId);
        }
    });
    $('[data-load-select]').change();

    //SLUGFY (Cria o slug do conteúdo de um input e adiciona a outro)
    $('[data-slug-to]').each(function () {
        var input = $(this);
        var $targetInput = $(input.data('slug-to'));

        input.stringToSlug({
            setEvents: 'keyup keydown change',
            callback: function(text) {
                if(!$('#custom_' + $targetInput.attr('name')).is(':checked')) {
                    $targetInput.val(text).trigger('change');
                }
            }
        });

        //Ativa slug personalizado (Não espelha mais a origem para criação do slug)
        $('#custom_' + $targetInput.attr('name')).on('change', function () {
            if (!$(this).is(':checked')) {
                input.change();
            }
        });
    });

    //BIND INPUT VALUE TO A TARGET
    $('[data-bind-to]').change(function () {
        var input = $(this);
        var $targetInput = $(input.data('bind-to'));

        $targetInput.text(input.val());
    });

    //ACIONA BOTÕES ATRAVÉS DE REQUISIÇÕES AJAX
    $('a[data-ajax="true"]').on('click', function () {
        var button = $(this);

        button.addClass('loading');

        $.get(button.attr("href"), {}, function (data) {
            button.removeClass('loading');

            //Dispara um evento
            if (button.attr("data-trigger-event") != "") {
                button.trigger(button.attr("data-trigger-event"));
            }
        });

        return false;
    });

    //DOIS BOTÕES QUE SE ALTERNAM APÓS FAZER A REQUISIÇÃO AJAX
    $('.ajax-action-group').each(function() {
        var groupContainer = $(this);

        groupContainer.on("click", "[data-item]", function() {
            var button = $(this);
            var item = button.data("item");

            button.addClass("loading");
            button.find("*").css("opacity", "0.4");

            $.get(button.attr("href"), {}, function (data) {
                button.removeClass("loading");
                button.find("*").css("opacity", "");

                var returnJson = JSON.parse(data);

                if (returnJson.status == "success") {
                    groupContainer.find("[data-item] .return").html(returnJson.return);

                    if (item == "1") {
                        groupContainer.attr("data-item-visible", 2);
                    } else {
                        groupContainer.attr("data-item-visible", 1);
                    }

                    if (groupContainer.attr("data-callback-status") == "true") {
                        groupContainer.parents(".item").attr("data-status", item);
                    }

                    //Dispara um evento
                    if (groupContainer.attr("data-trigger-event") != "") {
                        groupContainer.trigger(groupContainer.attr("data-trigger-event"));
                    }
                    toggleAcceptedTypes
                } else {
                    if (returnJson.return == 'Forbidden Request') {
                        notification('warning', 'Você não tem permissão.', button);
                    }
                }
            });

            return false;
        });
    });

    //MENSAGENS/NOTIFICAÇÕES
    //Notify Plugin
    $.notify.defaults({
        className: 'warn',
        autoHide: true,
        autoHideDelay: 3000
    });

    function notification(type, message, target, position) {
        type = (type == 'warning') ? 'warn' : type;
        position = (position === undefined || position === '') ? 'top left' : position;

        if (target == undefined || target == '') {
            $.notify(message, {
                position: position,
                className: type
            });
        } else {
            target.notify(message, type);
        }
    }
    window.notification = notification;

    //DATE PICKER
    var datePickerConfig = {
        "autoUpdateInput": false,
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Aplicar",
            "cancelLabel": "Cancelar",
            "fromLabel": "De",
            "toLabel": "Até",
            "customRangeLabel": "Customizado",
            "daysOfWeek": [
                "D",
                "S",
                "T",
                "Q",
                "Q",
                "S",
                "S"
            ],
            "monthNames": [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            "firstDay": 1
        }
    };

    //Single Date
    var attachDatePicker = function (input) {
        datePickerConfig.singleDatePicker = true;

        input.daterangepicker(datePickerConfig, function(start, end, label) {
            input.val(start.format('DD/MM/YYYY'));
        });

        input.on('show.daterangepicker', function(ev, picker) {
            if (input.val() == '') {
                picker.oldEndDate = null;
                picker.oldStartDate = null;

                $(picker.container[0]).find('tr .active').removeClass('active');
            }
        });
    };
    window.attachDatePicker = attachDatePicker;

    $('.date-picker').each(function () {
        var input = $(this);

        attachDatePicker(input);
    });

    //Single Date
    var attachDateRangePicker = function (input) {
        var dateRangePickerConfig = datePickerConfig;
        dateRangePickerConfig.singleDatePicker = false;
        dateRangePickerConfig.ranges = {
            'Hoje': [moment(), moment()],
            'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Último 7 dias': [moment().subtract(6, 'days'), moment()],
            'Últimos 30 dias': [moment().subtract(30, 'days'), moment()],
            'Próximos 30 dias': [moment(), moment().add(30, 'days')],
            'Este mês': [moment().startOf('month'), moment().endOf('month')],
            'Mês passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        };

        input.daterangepicker(dateRangePickerConfig, function(start, end, label) {
            input.val(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
        });

        input.on('show.daterangepicker', function(ev, picker) {
            if (input.val() == '') {
                picker.oldEndDate = null;
                picker.oldStartDate = null;

                $(picker.container[0]).find('tr .active').removeClass('active');
            }
        });
    };
    window.attachDateRangePicker = attachDateRangePicker;

    $('.date-range-picker').each(function () {
        var input = $(this);

        attachDateRangePicker(input);
    });

    //Datetime
    var attachDatetimePicker = function (input) {
        var datetimePickerConfig = datePickerConfig;

        datetimePickerConfig.singleDatePicker = true;
        datetimePickerConfig.timePicker = true;
        datetimePickerConfig.timePicker24Hour = true;
        datetimePickerConfig.timePickerSeconds = false;
        datetimePickerConfig.locale.format = "DD/MM/YYYY HH:mm:ss";

        input.daterangepicker(datetimePickerConfig, function(start, end, label) {
            input.val(start.format('DD/MM/YYYY HH:mm:ss'));
        });


        input.on('show.daterangepicker', function(ev, picker) {
            if (input.val() == '') {
                picker.oldEndDate = null;
                picker.oldStartDate = null;

                $(picker.container[0]).find('tr .active').removeClass('active');
            }
        });
    };
    window.attachDatetimePicker = attachDatetimePicker;

    $('.datetime-picker').each(function () {
        var input = $(this);

        attachDatetimePicker(input);
    });

    //COLOR PICKER ATRIBUTO
    $('.colorpicker-input').colorpicker({
        format: "hex"
    });

    //PERSONALIZA CHECKBOX e RADIOBOX
    $('.custom-checkbox, .custom-radiobox').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    }).on('ifChanged', function(event){
        $(this).change();
    });

    $('.custom-inline-checkbox, .custom-inline-radiobox').each(function(){
        var self = $(this),
            label = self.next(),
            label_text = label.text();

        label.remove();
        self.iCheck({
            checkboxClass: 'icheckbox_line-blue',
            radioClass: 'iradio_line-blue',
            insert: '<div class="icheck_line-icon"></div>' + label_text,
            ifChanged: function () {

            }
        });
    }).on('ifChanged', function(event){
        $(this).change();
    });

    //TABELAS
    // Plugin DataTable
    $('.data-table').DataTable({
        language: {
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "zeroRecords": "Nada encontrado",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "Não há registros disponíveis",
            "infoFiltered": "(filtrado _MAX_ do total de registros)"
        },

        paging: false,
        searching: false,
        ordering: false,
        lengthChange: false,
        info: false
    });

    //Percorre todos os cabeçalhos com ordenação ativa
    var $table = $('.table');
    var formFilter = $('.search-form-of-records').first();
    var orderBy = formFilter.find(".orderBy").val();
    var sortedBy = formFilter.find(".sortedBy").val();

    $table.each(function () {
        var table = $(this);

        //Destaca a palavra do formulário de busca na tabela
        table.jmHighlight(table.data('highlight-text'));

        table.find('th[data-column]').each(function() {
            var header = $(this);

            if (orderBy == header.data("column")) {
                header.addClass('sorting_' + sortedBy);
                header.attr('data-order', (sortedBy == 'asc') ? 'desc' : 'asc');
            } else {
                header.addClass('sorting');
                header.attr('data-order', 'asc');
            }
        })
        //Ao clicar no cabeçalho com ordenação ativa
            .on('click', function () {
                var column = $(this);

                formFilter.find(".orderBy").val(column.attr("data-column"));
                formFilter.find(".sortedBy").val(column.attr("data-order"));

                formFilter.submit();
            });
    });

    formFilter.submit(function (e) {
        e.preventDefault(); //prevent submit
        var self = this;

        formFilter.find('.number-input').each(function () {
            var input = $(this);

            if (input.val() !== '') {
                var target = $(input.data('target-filter'));
                target.val(target.data('column') + '.' + target.data('condition') + '.' + input.val());
            }
        });

        formFilter.find('.text-input').each(function () {
            var input = $(this);

            if (input.val() !== '') {
                var target = $(input.data('target-filter'));
                var likeWildcard = target.data('condition') === 'like' ? '%' : '';
                target.val(target.data('column') + '.' + target.data('condition') + '.' + likeWildcard + input.val() + likeWildcard);
            }
        });

        formFilter.find('.date-input').each(function () {
            var input = $(this);

            if (input.val() !== '') {
                var target = $(input.data('target-filter'));
                target.val(target.data('column') + '.' + target.data('condition') + '.' + moment(input.val(), 'DD/MM/YYYY').format('YYYY-MM-DD'));
            }
        });

        formFilter.find('.date-range-input').each(function () {
            var input = $(this);

            if (input.val() !== '') {
                var value = input.val().split(' - ');

                var target1 = $(input.data('target-filter') + '_1');
                target1.val(target1.data('column') + '.>=.' + moment(value[0], 'DD/MM/YYYY').format('YYYY-MM-DD'));

                var target2 = $(input.data('target-filter') + '_2');
                target2.val(target2.data('column') + '.<=.' + moment(value[1], 'DD/MM/YYYY').format('YYYY-MM-DD'));
            }
        });

        self.submit();
    });

    //PERSONALIZAÇÃO SELECT
    //Seleção
    $('.defaultSelect2, .searchableSelect2').each(function () {
        var input = $(this);

        if (input.val() != '') {
            input.find(' + .select2').addClass('active');
        }

        input.select2({
            language: "pt-BR",
            allowClear: true
        }).on('select2:close', function () {
            $(this).focus();
        });
    });

    //Multipla seleção
    $('.multipleSelect2').each(function () {
        var input = $(this);

        if (input.val() != undefined && input.val().length > 0) {
            input.find(' + .select2').addClass('active');
        }

        input.select2({
            language: "pt-BR",
            tokenSeparators: [',']
        }).on('select2:close', function () {
            $(this).focus();
        });
    });

    //Tags
    $(".tagSelect2").select2({
        language: "pt-BR",
        tags: true,
        tokenSeparators: [',']
    }).on('select2:close', function () {
        $(this).focus();
    });

    //Remote Data
    function formatRepo(repo) {
        if (repo.loading) return repo.text;

        if (typeof customFormatRepo !== 'undefined') {
            return customFormatRepo(repo);
        }

        var thumb = (repo.thumb !== undefined && repo.thumb !== '') ? '<img src="' + repo.thumb + '"> ' : '';

        var markup = '<div class="select2-result-repository clearfix">' + thumb + repo.id + ' - ' + repo.name + '</div>';

        return markup;
    }

    function formatRepoSelection (repo) {
        return (repo.id ? repo.id + ' - ' : '') + (repo.name || repo.text);
    }

    var commonRemoteConfig = {
        language: "pt-BR",
        placeholder: '',
        allowClear: true,
        ajax: {
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    query: params.term
                };
            },
            processResults: function (data, params) {
                return {
                    results: data.results
                };
            },
            cache: true
        },
        escapeMarkup: function (markup) {
            return markup;
        },
        minimumInputLength: 1,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection
    };

    $('.remoteSelect2').each(function () {
        var selectElement = $(this);

        //Configurações específicas
        commonRemoteConfig.ajax.url = selectElement.data('search-url');
        commonRemoteConfig.maximumSelectionLength = (selectElement.data('max-selection') === undefined ? 999 : selectElement.data('max-selection'));

        selectElement.select2(commonRemoteConfig).on('select2:close', function () {
            $(this).focus();
        });
    });

    $('.remoteSearchToFilter').each(function () {
        var selectElement = $(this);

        //Configurações específicas
        commonRemoteConfig.ajax.url = selectElement.data('search-url');

        commonRemoteConfig.ajax.processResults = function (data, params) {
            $.each(data.results, function (key, item) {
                item.id = selectElement.data('column') + '.' + selectElement.data('condition') + '.' + item.id;
                item.thumb = null;
            });
            return {
                results: data.results
            };
        };

        commonRemoteConfig.templateResult = function (repo) {
            if (repo.loading) return repo.text;

            var markup = '<div class="select2-result-repository clearfix">' + repo.name + '</div>';

            return markup;
        };

        commonRemoteConfig.templateSelection = function (repo) {
            return (repo.name || repo.text);
        };

        commonRemoteConfig.maximumSelectionLength = 999;

        selectElement.select2(commonRemoteConfig).on('select2:close', function () {
            $(this).focus();
        });

        //Carrega valores iniciais
        if (selectElement.data('initial-id') !== '') {
            var $option = $('<option selected>Carregando...</option>');

            selectElement.append($option).trigger('change');

            var initialId = selectElement.data('initial-id');

            if (!initialId) {
                return false;
            }

            $.ajax({
                type: 'GET',
                url: appendQueryString(selectElement.data('search-url'), {'id': initialId}),
                dataType: 'json'
            }).then(function (data) {
                if (data.success && data.results.length > 0) {
                    $option.text(data.results[0].name).val(selectElement.data('column') + '.' + selectElement.data('condition') + '.' + data.results[0].id);
                    $option.removeData();
                    selectElement.trigger('change');
                } else {
                    selectElement.append('<option selected value="">Selecione</option>').trigger('change');
                }
            });
        }
    });

    //NOS CASOS DE BUSCA REMOTA, BUSCA AUTOMATICAMENTE O VALOR INICIAL CASO DEFINIDO
    var $remoteSelectElement = $('[data-initial-id][data-search-url]:not(.remoteSearchToFilter)');
    $remoteSelectElement.each(function () {
        var selectElement = $(this);

        if (selectElement.data('initial-id') === '') {
            return false;
        }

        var $option = $('<option selected>Carregando...</option>');

        selectElement.append($option).trigger('change');

        $.ajax({
            type: 'GET',
            url: appendQueryString(selectElement.data('search-url'), {'id': selectElement.data('initial-id')}),
            dataType: 'json'
        }).then(function (data) {
            if (data.success && data.results.length > 0) {
                $option.text(data.results[0].name).val(data.results[0].id);
                $option.removeData();
                selectElement.trigger('change');
            } else {
                selectElement.append('<option selected value="">Selecione</option>').trigger('change');
            }
        });
    });

    //LIMPA O CAMPO DE BUSCA/FILTRO
    $('.form-control-clear-search, .form-control-clear-filter').on('click', function () {
        var button = $(this);
        var input = button.parents('.form-group').first().find('input');
        input.val('');

        //var form = button.parents('form').first();
        //form.submit(); //É possível acionar o formulário logo após a limpeza do filtro

        return false;
    });

    //BOTÃO SALVA E REDIRECIONA PARA LISTA
    $('.redirect-to-list').on('click', function () {
        $('.redirect-to-list-checkbox').prop('checked', true);
    });

    //INSTÂNCIA EDITORES
    var $editor = $('.editor');
    if ($editor[0]) {
        $editor.each(function () {
            var editor = $(this);

            if (editor.data('content-css')) {
                editorConfig.content_css = [
                    editor.data('content-css')
                ];
            } else {
                editorConfig.content_css = [];
            }

            tinymce.init(editorConfig);
        });
    }

    var $extendedEditor = $('.extended-editor');
    if ($extendedEditor[0]) {
        $extendedEditor.each(function () {
            var editor = $(this);

            if (editor.data('content-css')) {
                extentedEditorConfig.content_css = [
                    editor.data('content-css')
                ];
            } else {
                extentedEditorConfig.content_css = [];
            }

            tinymce.init(extentedEditorConfig);
        });
    }

    //MOSTRA/ESCONDE CONTEÚDO
    $('.content').on('click', '.hidden-content-container', function(e) {
        if ($(e.target).hasClass('hidden-content-container')) {
            var container = $(this);

            if (container.hasClass('open')) {
                container.removeClass('open');
            } else {
                container.addClass('open');
            }
        }
    });

    //EXPANDE/RETRAI LISTA
    $('.collapsible-list').on('click', 'li>ul', function(e) {
        var element = $(this);

        if (element.hasClass('open')) {
            if ($(e.target).hasClass('second-level')) {
                element.removeClass('open');
            }
        } else {
            element.addClass('open second-level');
        }
    });

    //FANCYBOX - lightbox
    parent.$('[data-rel="lightbox"]').fancybox({
        minWidth     : 300,
        wrapCSS      : 'lightbox-custom',
        loop         : false,

        helpers     : {
            title   : { type : 'inside' },
            buttons : {}
        }
    });
    //Abre links para lightbox que estão no iframe, no elemento pai
    $('body.base-iframe [data-rel="lightbox"]').each(function() {
        var element = $(this);
        element.on('click', function (e) {
            parent.$.fancybox({
                href: element.attr('href'),
                title: element.attr('title'),
                minWidth     : 300,
                wrapCSS      : 'lightbox-custom',
                loop         : false,
                helpers     : {
                    title   : { type : 'inside' },
                    buttons : {}
                }
            });

            e.preventDefault();
        });
    });

    //TABS
    //Quando o formulário com validação é enviado, destaca possível abas com erro
    if ($('.form.has-validation .tab-container')[0]) {
        $('.form.has-validation').on('submit', function () {
            if ($(this).hasClass('error')) {
                var navTab = $(this).find('.nav-tabs');

                $(this).find('.tab-pane').each(function () {
                    var tab = $(this);

                    $(this).find('.field.error').each(function () {
                        var navLink = navTab.find('a[href="#' + tab.attr('id') + '"]')
                        navLink.addClass('has-error');

                        //Assim que for detectado mudança no campo, limpa formatação de erro
                        $(this).find('input, select, textarea').on('change', function () {
                            navLink.removeClass('has-error');
                        });

                        return false;
                    });
                });
            }
        });
    }

    //Se houve um hash, mostra a aba identificada no hash
    if(window.location.hash) {
        var navLinkActive = $('.nav-tabs a[href="' + window.location.hash + '"]');
        if (navLinkActive[0]) {
            $('.nav-tabs .active').removeClass('active');
            navLinkActive.parents('li').first().addClass('active');

            $('.tab-pane').not(window.location.hash).removeClass('active');
            $(window.location.hash).addClass('active');
        }
    } else {
        //Força a visualização da aba que tenha o link ativo
        var navLinkTriggeredOnLoad = false;
        $('.nav-tabs .active a').click(function (e) {
            e.preventDefault();

            if (!navLinkTriggeredOnLoad) {
                $('.tab-pane').not(e.target.hash).removeClass('active');
                $(e.target.hash).addClass('active');
            }
            navLinkTriggeredOnLoad = true;
        }).click();
    }

    //Quando o link é clicado, adiciona hash
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if(history.pushState) {
            history.pushState(null, null, e.target.hash);
        }
    });

    //DESABILITA ELEMENTO QUANDO MARCADO
    $('.disable-element').on('change', function () {
        var input = $(this);
        var target = $(input.data('target'));

        if (input.is(':checked')) {
            target.addClass('disabled-element');
        } else {
            target.removeClass('disabled-element');
        }
    });

    //CHANGE POSITION - Jquery UI Sortable e Rutorika Sortable Laravel Package
    var changePosition = function(requestData, sortRoute){
        $.ajax({
            'url': sortRoute,
            'type': 'POST',
            'data': requestData,
            'success': function(data) {
                if (data.success) {
                    notification('success', 'Reordenado com sucesso.', '', 'top center');
                } else {
                    notification('warning', 'Houve um erro ao reordenar itens.', '', 'top center');
                }
            },
            'error': function(){
                notification('warning', 'Houve um erro ao reordenar itens.', '', 'top center');
            }
        });
    };

    var $sortableTables = $('.sortable-table tbody');
    if ($sortableTables[0]) {

        $sortableTables.each(function () {
            if ($.ui.sortable === undefined) {
                notification('error', 'Jquery UI Sortable não foi encontrado.', '', 'top center');

                return false;
            }

            var $sortableTable = $(this);
            var sortRoute = $sortableTable.data("sort-route");

            if (sortRoute === undefined) {
                notification('error', 'A rota para ordenação não foi definida.', '', 'top center');

                return false;
            }

            $sortableTable.sortable({
                handle: '.sortable-handle',
                axis: 'y',
                update: function(a, b){
                    var $sorted = b.item;

                    var $previous = $sorted.prev();
                    var $next = $sorted.next();

                    if ($previous.length > 0) {
                        changePosition({
                            id: $sorted.data('item-id'),
                            parentId: $sorted.data('parent-id'),
                            positionEntityId: $previous.data('item-id'),
                            type: 'moveAfter'
                        }, sortRoute);
                    } else if ($next.length > 0) {
                        changePosition({
                            id: $sorted.data('item-id'),
                            parentId: $sorted.data('parent-id'),
                            positionEntityId: $next.data('item-id'),
                            type: 'moveBefore'
                        }, sortRoute);
                    } else {
                        notification('warning', 'Houve um erro ao reordenar itens.', $sortableTable);
                    }
                },
                cursor: "move"
            });
        });
    }
});

//EDITOR CONFIGURAÇÕES
var editorConfig = {
    selector: ".editor",
    skin: "tinymceskyn",
    content_style: "body{padding:10px !important;}",
    language: "pt_BR",

    object_resizing : "img",
    valid_elements : "a[href],strong/b,i/em,p,br,img[src|class|alt|title|style],iframe[src|class]",
    entity_encoding : "raw",
    menubar: false,
    elementpath: false,
    statusbar: false,
    autoresize_min_height: 220,
    autoresize_bottom_margin: 0,
    autoresize_overflow_padding: 0,
    target_list: false,
    plugins: [
        "autolink lists link image charmap anchor autoresize",
        "contextmenu paste code"
    ],
    toolbar: "undo redo | bold italic | link image",
    protect: [
        /\<\/?(if|endif)\>/g, // Protect <if> & </endif>
        /\<\/?(if|endif)\>/g, // Protect <if> & </endif>
        /\<xsl\:[^>]+\>/g, // Protect <xsl:...>
        /<\?php.*?\?>/g // Protect php code
    ],
    setup: function(editor) {
        editor.on('keyup', function(e) {
            tinymce.triggerSave();
        });
    }
};

//Editor extendido
var extentedEditorConfig = $.extend({}, editorConfig, {
    selector: ".extended-editor",
    path_absolute : "/",
    valid_elements: "a[href|rel|title|class|id|data],strong/b,i/em,span[style],p[class|style],br,img[src|class|alt|title|style|id|data],div[class|style|id|data]," +
    "iframe[*],h2[class|id],h3[class|id],h4[class|id],h5[class|id],ul[class|style|id],ol[class|style|id],li[class|style],blockquote[class],pre[class],video[*],source[*]",
    plugins: [
        "advlist autolink advlist lists link image media",
        "searchreplace visualblocks code",
        "media contextmenu paste anchor autoresize"
    ],
    menubar: "insert edit format",
    toolbar: "styleselect | bold italic underline | aligncenter alignright  | " +
    "removeformat | bullist numlist | link image media | code",
    video_template_callback: function (data) {
        return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' +
            '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' +
            (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') +
            '</video>';
    },
    style_formats: [
        {
            title: "Títulos", items: [
            {title: "Título", block: "h2", classes: "art-title"},
            {title: "Subtítulo", block: "h3", classes: "art-subtitle"},
            {title: "Sub-Subtítulo", block: "h4"}
        ]
        },
        {
            title: "Blocks", items: [
            {title: "Paragraph", format: "p"},
            {title: "Blockquote", format: "blockquote"},
            {title: "Div", format: "div"},
            {title: "Pre", format: "pre"}
        ]
        }
    ],
    paste_as_text: true,
    paste_word_valid_elements: "b,strong,i,em,h1,h2,h3,h4,p,img",
    advlist_bullet_styles: "default",
    advlist_number_styles: "default",
    image_dimensions: false,
    image_class_list: [
        {title: 'None', value: 'art-blog-img'},
        {title: 'Alinhada à esquerda', value: 'img-left-floated'},
        {title: 'Alinhada à direita', value: 'img-right-floated'}
    ],
    rel_list: [
        {title: 'Nenhum', value: ''},
        {title: 'Nova Janela', value: 'new-window'},
        {title: 'Lightbox', value: 'lightbox'}/*,
        {title: 'Lightbox Iframe', value: 'lightbox-iframe'}*/
    ],
    relative_urls: false,
    file_browser_callback : function(field_name, url, type, win) {
        var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

        var cmsURL = extentedEditorConfig.path_absolute + 'laravel-filemanager?field_name=' + field_name;
        if (type == 'image') {
            cmsURL = cmsURL + "&type=Images";
        } else {
            cmsURL = cmsURL + "&type=Files";
        }

        tinyMCE.activeEditor.windowManager.open({
            file : cmsURL,
            title : 'Filemanager',
            width : x * 0.8,
            height : y * 0.8,
            resizable : "yes",
            close_previous : "no"
        });
    }
});