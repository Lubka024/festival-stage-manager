import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Equipment
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="stageManager/equipment/create">
					Create new equipment
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Equipment" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="stageManager/equipment/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<NumberCell key="quantity" field="quantity" header="Quantity" />
			</DataGridScope>
		</>
	)
}
