import * as React from 'react'
import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Stage detail
			</SlotSources.Title>
			<DetailScope entity="Stage(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/stage/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Stages
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/stage/edit(id: $entity.id)">
						Edit stage
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Equipment
								</h2>
								<LinkButton to="admin/equipment/create">
									Create new equipment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Equipment[stage.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/equipment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<NumberCell key="quantity" field="quantity" header="Quantity" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Performances
								</h2>
								<LinkButton to="admin/performance/create">
									Create new performance
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Performance[stage.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/performance/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<DateCell key="startTime" field="startTime" header="Start time" />
							<DateCell key="endTime" field="endTime" header="End time" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
