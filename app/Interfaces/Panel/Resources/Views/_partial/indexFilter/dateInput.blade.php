<input class="form-control input-sm date-input mask-date date-picker no-placeholder {{ $filter->has('active_filter') ? ' active' : '' }}"
       data-target-filter="#date_filter_{{ $loop->iteration }}"
       placeholder="{{ $filter['title'] }}"
       value="{{ $filter->has('active_filter') ? $filter->get('active_filter')->first()->get('value')->format('d/m/Y') : '' }}"
       type="text"
>
<input type="hidden"
       id="date_filter_{{ $loop->iteration }}"
       name="filter[]"
       data-column="{{ $filter['column'] }}"
       data-condition="{{ $filter['condition'] }}"
>